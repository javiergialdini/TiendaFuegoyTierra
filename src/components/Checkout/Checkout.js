import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Navigate, Link } from 'react-router-dom'
import { collection, addDoc, getDocs, writeBatch, query, where, documentId   } from 'firebase/firestore';
import { db} from '../../firebase/config'
import Swal from 'sweetalert2'
import { LoginContext } from '../../context/LoginContext'

export const Checkout = () => {
    const { user } = useContext(LoginContext)
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // validaciones
        if(values.nombre.length < 1){
            Swal.fire('Nombre inválido','','error')
            return
        }
        if(values.direccion.length < 1){
            Swal.fire('Direccion inválido','','error')
            return
        }
        if(values.email.length < 1){
            Swal.fire('Email inválido','','error')
            return
        }

        const order = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, price: prod.price, cantidad: prod.cantidad, nombre: prod.name})),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, 'productos')
        const ordersRef = collection(db, 'orders')

        const outOfStock = []

        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id)))
        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, order)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            alert("Hay items sin stock")
        }

    }

    if(orderId){
        return (
            <div style={{marginTop: '100px'}}>
                <h2>Tu orden se registró con éxito</h2>
                <hr/>
                <p>Guardá tu número de orden: {orderId}</p>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to='/'/>
    }

    if(!user.logged){
        return(
            <div style={{marginTop: '100px'}}>
                <h2>Por favor inicie sesión para terminar la compra</h2>
                <Link to="/login">Iniciar sesión</Link>
            </div>
        )
    }

    return(
        <div style={{marginTop: '100px'}}>
            <div className="container my-5">
                <h3>Checkout</h3>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.nombre}
                        type={'text'}
                        placeholder='Tu numbre'
                        className="form-control my-2"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                    <input
                        value={values.direccion}
                        type={'text'}
                        placeholder='Direccion'
                        className="form-control my-2"
                        name="direccion"
                        onChange={handleInputChange}
                    />
                    <input
                        value={values.email}
                        type={'text'}
                        placeholder='Tu Email'
                        className="form-control my-2"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
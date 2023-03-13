import { useState, useEffect} from 'react';
import { pedirProductoPorId } from '../../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productoId } = useParams()

    useEffect (() => {
        setLoading(true)

        pedirProductoPorId(Number(productoId))
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })
    },[])

    console.log("entra")

    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}
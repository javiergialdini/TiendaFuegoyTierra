import React, { useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1 - referencia (sync)
        const productosRef = collection(db, "productos")
        const qry = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        // 2 - pedir esa referencia (async)
        getDocs(qry)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })

                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [ categoryId ])

    return (
        <div>
            {
                loading
                    ? <h2 style={{ paddingTop: '100px'}}>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    );
}
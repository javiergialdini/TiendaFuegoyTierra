import { useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productoId } = useParams()

    useEffect (() => {
        setLoading(true)

        // 1 - referecia (sync)
        const docRef = doc(db, 'productos', productoId)
        // 2 - llamado async
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    },[])

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
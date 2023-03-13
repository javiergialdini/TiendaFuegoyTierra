import React, { useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    const { categoryId } = useParams()

    console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((response) => {
                if(!categoryId) {
                    setProductos(response)
                } else {
                    setProductos(response.filter( (p) => p.category === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [ categoryId ])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    );
}
import { useState } from "react";

export const ItemCount = ( {max, cantidad, setCantidad} ) => {
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad+1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    // const handleAgregar = () => {
    //     const itemToCart = {
    //         ...item,
    //         cantidad
    //     }
    // }

    return(
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            {/* <button onClick={handleAgregar} className="btn btn-succes my-2">Agregar al carro</button> */}
        </div>
    )
}
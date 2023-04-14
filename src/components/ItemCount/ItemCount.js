import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad+1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    return(
        <div>
            <Grid container spacing={2} >
                <Grid item>
                    <Button variant="outlined" color="success" onClick={handleRestar}>-</Button>
                </Grid>
                <Grid item>
                    <span
                    style={{fontSize:"20px", textAlign:"center", justifyContent: "center"}}
                    className="mx-2">{cantidad}</span>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" onClick={handleSumar} >+</Button>
                </Grid>
            </Grid>
            <Button
            style={{marginTop: "20px", marginBottom: '10px'}}
            variant="outlined"
            color="success"
            onClick={handleAgregar}>Agregar al carrito</Button>
        </div>
    )
}
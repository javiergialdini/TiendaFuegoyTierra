import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Typography from '@mui/material/Typography';
import { ItemDescription } from "../Item/ItemDescription";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {ItemCount} from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div
        style= {{
            padding: '50px',
            paddingTop: '100px'
        }}>
            <div>
                <Grid justifyContent="center" container spacing={10} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item>
                        <img src={item.img} alt={item.name} style={{ width: '440px', height: '440px' }} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h3">{item.name}</Typography>
                            <Typography variant="h5">$ {item.price}</Typography>
                            <Typography component="div" style={{ paddingTop: '20px', marginBottom: '50px' }} variant="body2">
                                { item.descriptions.map((description, index) => (<ItemDescription key={'ItemDetail'+index} description={description}/>))}
                            </Typography>
                            {
                                isInCart(item.id)
                                ?   <Link
                                        to="/cart"
                                        style={{
                                            textDecoration: 'none',
                                            variant:'h6',
                                            color: 'inherit',
                                            mr: 2,
                                            display: { xs: 'flex', md: 'flex' }}}>
                                        <Button
                                            style={{marginTop: "20px"}}
                                            variant="outlined"
                                            color="success">Ver mi compra
                                        </Button>
                                    </Link>

                                :   <ItemCount
                                        max={item.stock}
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                        handleAgregar={handleAgregar}
                                    />
                            }

                            <Stack style={{ paddingTop: '20px' }} spacing={2} direction="row">
                                <Button onClick={handleVolver} variant="outlined" color="error">Volver</Button>
                            </Stack>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            {/* <ItemCount
                max={item.stocks.length}
                cantidad={cantidad}
                setCantidad={setCantidad}
            /> */}
        </div>
    )
}
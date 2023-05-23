import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Cart = () => {
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)
    const { user } = useContext(LoginContext)

    if(cart.length === 0){
        return(
            <div style={{marginTop: '100px'}}>
                <Typography
                            component="h2"
                            sx={{
                                ml: 4,
                                fontSize: '25px'
                            }}>
                            No tienes productos agregados
                </Typography>
                <hr style={{marginLeft: '20px', marginRight: '20px'}}/>
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="primary" sx={{ ml: 4, mb:2}}>
                            Ir a la tienda
                        </Button>
                    </Stack>
                </Link>
            </div>
        )
    }
    return(
        <Box sx={{ flexGrow: 1, maxWidth: 900, margin: 'auto'}}>
            <FormGroup row>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={dense}
                    onChange={(event) => setDense(event.target.checked)}
                    />
                }
                label="Enable dense"
                />
                <FormControlLabel
                control={
                    <Checkbox
                    checked={secondary}
                    onChange={(event) => setSecondary(event.target.checked)}
                    />
                }
                label="Enable secondary text"
                />
            </FormGroup>
            <Grid container spacing={5} style={{alignContent: 'center', justifyContent: 'center'}}>
                <Grid item xs={18} md={10}>
                    <Typography sx={{ mt: 6, mb: 2, ml: 4}}variant="h4" component="div">
                        Tu compra
                    </Typography>
                { user.logged
                    ?
                    <Link to="/checkout" style={{color: 'inherit', textDecoration: 'none'}}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" color="success" sx={{ ml: 4, mb:2}}>
                                Terminar compra
                            </Button>
                        </Stack>
                    </Link>
                    :
                    <Link to="/login" style={{color: 'inherit', textDecoration: 'none'}}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" color="success" sx={{ ml: 4, mb:2}}>
                                Iniciar sesión
                            </Button>
                        </Stack>
                    </Link>
                }
                    <List dense={dense}>
                    {
                        cart.map((item, index) => (
                            <>
                                <ListItem key={"ListItem"+index}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon style={{color: 'red'}} onClick={() => eliminarDelCarrito(item.id)}/>
                                    </IconButton>
                                }
                                >
                                    <ListItemAvatar>
                                        <Avatar style={{height: '70px', width: '70px', borderRadius: 0, marginRight: '20px'}}>
                                            <img style={{ width: 'auto', height: '100px' }}  src={item.img} alt={item.name} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText style={{fontColor: 'black'}}
                                        primary={item.name}
                                        secondary={true ? 'Cantidad: '+item.cantidad+' / valor untiario:  $'+item.price  : null}
                                        secondaryTypographyProps={{style: {color: 'black'}}}
                                    />
                                    <ListItemText style={{fontColor: 'black', textAlign: 'right'}}
                                        primary={'$ '+(item.price*item.cantidad)}
                                    />
                                </ListItem>
                                <hr />
                            </>
                        ))
                    }
                        <ListItem>
                            <ListItemText style={{fontColor: 'black', textAlign: 'right'}}
                                primary={'TOTAL $ '+totalCompra()}
                            />
                        </ListItem>
                    </List>
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => vaciarCarrito()} variant="outlined" color="error" sx={{ mt: 4, ml: 4}}>
                            Vaciar Carrito
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
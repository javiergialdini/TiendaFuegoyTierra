import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { ItemDescription } from "../Item/ItemDescription";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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
                            <Typography style={{ paddingTop: '20px' }} variant="body2">
                            { item.descriptions.map((description) => (<ItemDescription description={description.description}/>))}
                            </Typography>
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
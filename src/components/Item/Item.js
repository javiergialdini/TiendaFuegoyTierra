import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom'

export const Item = ( {item} ) => {

    return (
            <Card sx={{ maxWidth: 350, margin: 5, background: 'white'}} key={item.id}>
                <Link
                to={`/detail/${item.id}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',}}>
                    <CardActionArea>
                        <CardMedia
                            style={{ height: '400px', width: '350px'}}
                            component="img"
                            image={item.img}
                            alt={item.name}
                        />
                        <CardContent style={{ height: '150px', width: '350px',}}>
                            <div>
                                <div style={{heigh: '50%', display: 'flex', justifyContent: 'space-between'}}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{color: 'black', height: '30px'}}>
                                        $ {item.price}
                                    </Typography>
                                    {
                                        item.stock === 0
                                        ?   <div >
                                                <Typography variant="p" component="div" style={{color: 'red', marginLeft: '10px', fontSize: '15px'}}>
                                                    No disponible
                                                </Typography>
                                            </div>
                                        :<></>
                                    }
                                </div>
                                <div style={{heigh: '50%',}}>
                                    <Typography gutterBottom variant="body1" component="div" sx={{color: 'black', fontWeight: 'bold'}}>
                                        {item.name}
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
    )
}

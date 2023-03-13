import { ItemDescription } from "./ItemDescription"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

export const Item = ( {item} ) => {
    return (
            <Card sx={{ maxWidth: 345, margin: 5, background: 'white'}} key={item.id}>
                <Link
                to={`/detail/${item.id}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="350"
                            image={item.img}
                            alt={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div" sx={{color: 'black', height: '60px', fontWeight: 'bold'}}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{color: 'black', height: '60px', marginBottom: '20px'}}>
                                { item.descriptions.map((description) => (<ItemDescription description={description.description}/>))}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{color: 'black', height: '30px', paddingTop: '10px'}}>
                                $ {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
    )
}

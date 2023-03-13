import { Item } from "../Item/Item"
import './ItemList.css'
import { Categories } from '../Categories/Categories'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export const ItemList = ({items}) => {

    return(
        <div>
            <h2 style={{textAlign: 'center', marginTop: '90px'}}>Nuestros Productos</h2>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign:'center' }}>
                <Categories/>
            </div>
            <hr/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                { items.map((producto) =>
                    <Grid>
                        <Item item={producto}/>
                    </Grid>
                )}
                </Grid>
            </Box>
        </div>
    );
}
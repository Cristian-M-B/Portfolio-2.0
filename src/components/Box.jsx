import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

export default function Box({ name, image }) {
    return (
        <Grid item data-aos='zoom-in' style={{ margin: '2vh' }}>
            <Paper elevation={18} style={{ height: '150px', width: '150px' }}>
                <img src={image} alt={name} style={{ height: '100%', width: '100%' }} />
            </Paper>
            <Typography align='center' variant='h6'>{name}</Typography>
        </Grid>
    )
}

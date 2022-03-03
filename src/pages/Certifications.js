import React from 'react';
import Slider from '../components/Slider.jsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../styles/animations.css';

const useStyles = makeStyles((theme) => ({
    certifications: {
        backgroundColor: 'white',
        paddingTop: '50px',
        paddingBottom: '50px',
        transform: 'skewY(7deg)',
    },
    container: {
        width: '100%',
        height: '100%',
        transform: 'skewY(-7deg)',
    },
    title: {
        color: '#24292F',
        borderBottom: '1px solid #24292F',
        marginBottom: '10vh',
        animation: 'title 3s infinite',
    }
}));

export default function Certifications() {
    const classes = useStyles();
    return <div id='certifications' className={classes.certifications}>
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            className={classes.container}
        >
            <Typography variant='h5' className={classes.title}>Mis Certificaciones</Typography>
            <Slider />
        </Grid>
    </div>
}

import React from 'react';
import Form from '../components/Form.jsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../styles/animations.css';

const useStyles = makeStyles((theme) => ({
    contact: {
        backgroundColor: '#24292F',
        paddingTop: '50px',
        paddingBottom: '50px',
        transform: 'skewY(7deg)',
    },
    title: {
        color: 'white',
        borderBottom: '1px solid white',
        marginBottom: '10vh',
        animation: 'title 3s infinite',
    }
}));

export default function Contact() {
    const classes = useStyles();
    return <div id='contact' className={classes.contact}>
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            style={{ transform: 'skewY(-7deg)' }}
        >
            <Typography variant='h5' className={classes.title}>Contáctame</Typography>
            <Form />
        </Grid>
    </div>
}

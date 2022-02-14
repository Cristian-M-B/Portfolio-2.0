import React from 'react';
import Form from '../components/Form.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    contact: {
        backgroundImage: 'linear-gradient(45deg, #ffffff, #dbdbdb)',
        color: '#24292F',
        paddingTop: '50px',
        paddingBottom: '50px',
        transform: 'skewY(7deg)',
    }
}));

export default function Contact() {
    const classes = useStyles();
    return <div id='contact' className={classes.contact}>
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            style={{ transform: 'skewY(-7deg)' }}
        >
            <Form />
        </Grid>
    </div>
}

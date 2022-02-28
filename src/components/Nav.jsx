import React from 'react';
import LinkScroll from './LinkScroll.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        width: '100%',
        height: '8vh',
        color: 'white',
        fontWeight: 'bold',
    }
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction='row'
            justifyContent='space-evenly'
            alignItems='center'
            className={classes.nav}
        >
            <LinkScroll section='technologies' name='Tecnologías' />
            <LinkScroll section='projects' name='Proyectos' />
            <LinkScroll section='contact' name='Contacto' />
        </Grid>
    )
}

import React from 'react';
import { Link } from 'react-scroll';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        width: '100%',
        height: '8vh',
        backgroundColor: '#24292F',
        color: 'white',
        fontWeight: 'bold',
    },
    link: {
        '&:hover': {
            cursor: 'pointer',
            textShadow: '0 0 10px rgba(255, 255, 255, 1)',
        }
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
            <Link
                to='home'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
                className={classes.link}
            >
                Inicio
            </Link>
            <Link
                to='technologies'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
                className={classes.link}
            >
                Tecnologías
            </Link>
            <Link
                to='projects'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
                className={classes.link}
            >
                Proyectos
            </Link>
        </Grid>
    )
}

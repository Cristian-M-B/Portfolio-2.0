import React from 'react';
import { animateScroll } from 'react-scroll';
import { Grid, IconButton } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import '../styles/animations.css';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '8vh',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: '40px',
    },
    icon: {
        color: 'white',
        animation: 'arrow 2s infinite',
    },
}));

export default function Footer() {
    const classes = useStyles();

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            className={classes.footer}
        >
            <IconButton onClick={scrollToTop} className={classes.icon}>
                <ArrowUpward fontSize='large' />
            </IconButton>
        </Grid>
    )
}
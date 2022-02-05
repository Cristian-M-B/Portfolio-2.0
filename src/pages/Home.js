import React from 'react';
import Nav from '../components/Nav.jsx';
import Icons from '../components/Icons.jsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    home: {
        backgroundColor: '#24292F',
        color: 'white',
        height: '600px',
    },
    container: {
        width: '100%',
        height: '100%',
    },
    text: {
        height: '50%',
        width: '85%',
    },
    '@media (max-width: 600px)': {
        text: {
            width: '100%',
            height: '85%',
        },
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Nav />
            <div id='home' className={classes.home}>
                <Grid
                    container
                    alignItems='center'
                    className={classes.container}
                >
                    <Grid
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        className={classes.text}
                    >
                        <Typography variant='h4'>Cristian Baronetto</Typography>
                        <Typography variant='h4'>Full Stack Developer</Typography>
                    </Grid>
                    <Icons />
                </Grid>
            </div>
        </>
    )
}

import React from 'react';
import Nav from '../components/Nav.jsx';
import Icons from '../components/Icons.jsx';
import avatar from '../assets/images/avatar/avatar.png';
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
        paddingBottom: '70px',
    },
    image: {
        height:'250px',
        width:'250px',
        borderRadius:'50%',
        backgroundImage: 'linear-gradient(45deg, #24292F, white)',
        marginBottom:'3vh',
        animation: 'rotate 5s infinite',
    },
    text: {
        height: '70%',
        width: '90%',
    },
    '@media (max-width: 600px)': {
        image: {
            height:'200px',
            width:'200px',
        },
        text: {
            width: '100%',
            height: '85%',
        }
    },
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
                        <img src={avatar} alt='Cristian Baronetto' className={classes.image} />
                        <Typography variant='h4'>Cristian Baronetto</Typography>
                        <Typography variant='h4'>Full Stack Developer</Typography>
                    </Grid>
                    <Icons />
                </Grid>
            </div>
        </>
    )
}

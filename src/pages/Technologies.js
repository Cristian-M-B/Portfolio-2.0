import React from 'react';
import technologies from '../data/technologies.js';
import Box from '../components/Box.jsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../styles/animations.css';

const useStyles = makeStyles((theme) => ({
    technologies: {
        backgroundColor: 'white',
        color: '#24292F',
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

export default function Technologies() {
    const classes = useStyles();
    return <div id='technologies' className={classes.technologies}>
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            className={classes.container}
        >
            <Typography variant='h5' className={classes.title}>Mis Skills</Typography>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                {technologies.map(technology => {
                    return (
                        <Box key={technology?.name} name={technology?.name} image={technology?.image} />
                    )
                })}
            </Grid>
        </Grid>
    </div>
}

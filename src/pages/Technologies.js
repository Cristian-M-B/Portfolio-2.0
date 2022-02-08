import React from 'react';
import technologies from '../data/technologies.js';
import Box from '../components/Box.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    }
}));

export default function Technologies() {
    const classes = useStyles();
    return <div id='technologies' className={classes.technologies}>
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            className={classes.container}
        >
            {technologies.map(technology => {
                return (
                    <Box key={technology?.name} name={technology?.name} image={technology?.image} />
                )
            })}
        </Grid>
    </div>
}

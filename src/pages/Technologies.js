import React from 'react';
import technologies from '../data/technologies.js';
import { Grid, Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

const useStyles = makeStyles((theme) => ({
    technologies: {
        backgroundColor: 'white',
        color: '#24292F',
        // backgroundImage: 'linear-gradient(45deg, #654ea3, #eaafc8)',
	    transform: 'skewY(7deg)',
    }
}));

export default function Technologies() {
    const classes = useStyles();
    return <div id='technologies' style={{paddingTop: '50px', paddingBottom: '50px'}} className={classes.technologies}>
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            style={{width:'100%', height:'100%', transform: 'skewY(-7deg)'}}
        >
            {technologies.map(technology => {
                return (
                    <Grid item key={technology?.name} style={{margin:'2vh'}} data-aos='zoom-in'>
                        <Box component={Paper} elevation={18}  style={{ height:'150px', width:'150px'}}>
                            <img src={technology?.image} alt={technology?.name} style={{height:'100%', width:'100%'}}/>
                        </Box>
                        <Typography align='center' variant='h6'>{technology?.name}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    </div>
}

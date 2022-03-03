import React from 'react';
import certifications from '../data/certifications.js';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '404px',
        width: '554px',
    },
    size: {
        height: '400px',
        width: '550px',
    },
    '@media (max-width: 600px)': {
        paper: {
            height: '277px',
            width: '342px',
        },
        size: {
            height: '275px',
            width: '340px',
        }
    }
}));

export default function Slider() {
    const classes = useStyles();
    return <Paper elevation={18} data-aos='zoom-in' className={classes.paper}>
        <Carousel className={classes.size}>
            {certifications.map(certification => {
                return <img key={certification.name}
                    src={certification.image}
                    alt={certification.name}
                    className={classes.size}
                />
            })}
        </Carousel>
    </Paper>
}

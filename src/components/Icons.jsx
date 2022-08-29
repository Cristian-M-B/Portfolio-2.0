import React from 'react';
import { Grid } from '@material-ui/core';
import { LinkedIn, GitHub, Email, WhatsApp, PictureAsPdf } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        height: '60%',
        width: '10%',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        borderRadius: '50%',
        padding: '10px',
        '&:hover': {
            color: '#ffa533',
            border: '2px solid #ffa533',
        }
    },
    '@media (max-width: 600px)': {
        icon: {
            width: '100%',
            height: '15%',
            flexDirection: 'row',
        }
    }
}));

export default function Icons() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction='column'
            justifyContent='space-evenly'
            alignItems='center'
            className={classes.icon}
        >
            <a href='https://www.linkedin.com/in/cristian-baronetto' target='_blank' rel='noreferrer' className={classes.link}>
                <LinkedIn fontSize='large' />
            </a>
            <a href='https://github.com/Cristian-M-B' target='_blank' rel='noreferrer' className={classes.link}>
                <GitHub fontSize='large' />
            </a>
            <a href='mailto:crisbaronetto@hotmail.com' className={classes.link}>
                <Email fontSize='large' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5491168071990' target='_blank' rel='noreferrer' className={classes.link}>
                <WhatsApp fontSize='large' />
            </a>
            <a href='https://drive.google.com/file/d/14r7HONB3DHS8RRxfGj80T6XhMh0ZK7R3/view' target='_blank' rel='noreferrer' className={classes.link}>
                <PictureAsPdf fontSize='large' />
            </a>
        </Grid>
    )
}

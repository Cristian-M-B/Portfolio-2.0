import React from 'react';
import LinkScroll from './LinkScroll.jsx';
import { Grid, Tooltip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FaLaptopCode } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GiDiploma } from 'react-icons/gi';
import { TiContacts } from 'react-icons/ti';

const useStyles = makeStyles((theme) => ({
    navWeb: {
        width: '100%',
        height: '8vh',
        color: 'white',
        fontWeight: 'bold',
    },
    navMobile: {
        display: 'none',
    },
    icon: {
        color: 'white',
    },
    '@media (max-width: 600px)': {
        navWeb: {
            display: 'none',
        },
        navMobile: {
            display: 'flex',
        }
    }
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
                className={classes.navWeb}
            >
                <LinkScroll section='technologies' name='Tecnologías' />
                <LinkScroll section='projects' name='Proyectos' />
                <LinkScroll section='certifications' name='Certificaciones' />
                <LinkScroll section='contact' name='Contacto' />
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
                className={classes.navMobile}
            >
                <Tooltip title="Tecnologías">
                    <IconButton className={classes.icon}>
                        <LinkScroll section='technologies' icon={<FaLaptopCode size={30} />} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Proyectos">
                    <IconButton className={classes.icon}>
                        <LinkScroll section='projects' icon={<BsBriefcaseFill size={30} />} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Certificaciones">
                    <IconButton className={classes.icon}>
                        <LinkScroll section='certifications' icon={<GiDiploma size={35} />} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Contacto">
                    <IconButton className={classes.icon}>
                        <LinkScroll section='contact' icon={<TiContacts size={35} />} />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>
    )
}

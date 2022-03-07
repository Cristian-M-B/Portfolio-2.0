import React from 'react';
import projects from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../styles/animations.css';

const useStyles = makeStyles((theme) => ({
    projects: {
        backgroundColor: '#24292F',
        color: 'white',
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
        borderBottom: '1px solid white',
        marginBottom: '10vh',
        animation: 'title 3s infinite',
    }
}));

export default function Projects() {
    const classes = useStyles();
    return <div id='projects' className={classes.projects}>
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            className={classes.container}
        >
            <Typography variant='h5' className={classes.title}>Mis Proyectos</Typography>
            {projects.map(project => {
                return (
                    <ProjectCard key={project?.name} name={project?.name} image={project?.image} link={project?.link} description={project?.description} />
                )
            })}
        </Grid>
    </div>
}

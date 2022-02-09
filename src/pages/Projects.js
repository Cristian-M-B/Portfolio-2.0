import React from 'react';
import projects from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    projects: {
        backgroundColor: '#24292F',
        color: 'white',
        paddingTop: '50px',
        paddingBottom: '50px',
    },
    container: {
        width: '100%',
        height: '100%',
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
            {projects.map(project => {
                return (
                    <ProjectCard key={project?.name} name={project?.name} image={project?.image} link={project?.link} description={project?.description} />
                )
            })}
        </Grid>
    </div>
}

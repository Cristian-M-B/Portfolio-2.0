import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    projects: {
        backgroundColor: '#24292F',
        color: 'white',
    }
}));

export default function Projects() {
    const classes = useStyles();
    return <div id='projects'  style={{height: '600px'}} className={classes.projects}>
        Proyectos
    </div>
}

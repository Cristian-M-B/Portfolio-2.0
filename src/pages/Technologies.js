import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    technologies: {
        backgroundColor: 'white',
        color: '#24292F',
    }
}));

export default function Technologies() {
    const classes = useStyles();
    return <div id='technologies'  style={{height: '600px'}} className={classes.technologies}>
        Tecnologías
    </div>
}

import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, IconButton, Collapse, Typography } from '@material-ui/core';
import { Link, ExpandMore, ExpandLess } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

const useStyles = makeStyles((theme) => ({
    card: {
        width: '40vw',
    },
    image: {
        width: '100%',
    },
    '@media (max-width: 600px)': {
        card: {
            width: '80vw',
        }
    }
}));

export default function ProjectCard({ name, image, link, description }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item data-aos='flip-right' style={{ margin: '2vh' }}>
            <Card className={classes.card}>
                <CardContent style={{padding: '8px'}}>
                    <Typography align='center' variant='h6'>
                        {name}
                    </Typography>
                </CardContent>
                <img src={image} alt={name} className={classes.image} />
                <CardActions style={{ display: 'flex', justifyContent: 'space-between', padding: '0px'}}>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <IconButton>
                            <Link />
                        </IconButton>
                    </a>
                    <IconButton onClick={handleExpandClick}>
                        {!expanded
                            ? <ExpandMore />
                            : <ExpandLess />
                        }
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <Typography>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

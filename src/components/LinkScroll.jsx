import React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        '&:hover': {
            cursor: 'pointer',
            textShadow: '0 0 10px rgba(255, 255, 255, 1)',
        }
    }
}));

export default function LinkScroll({ section, name }) {
    const classes = useStyles();
    return (
        <Link
            to={section}
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-10}
            duration={1000}
            className={classes.link}
        >
            {name}
        </Link>
    )
}

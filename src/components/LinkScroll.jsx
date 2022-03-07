import React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        '&:hover': {
            cursor: 'pointer',
            color: '#ffa533',
            textShadow: '0 0 10px rgba(255, 165, 51, 0.5)',
        }
    }
}));

export default function LinkScroll({ section, name, icon }) {
    const classes = useStyles();
    return (
        <Link
            to={section}
            activeClass='active'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className={classes.link}
        >
            {name ? name : icon}
        </Link>
    )
}

import React, { useState } from 'react';
import { Grid, Box, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

const useStyles = makeStyles((theme) => ({
    contact: {
        backgroundImage: 'linear-gradient(45deg, #ffffff, #dbdbdb)',
        color: '#24292F',
        paddingTop: '50px',
        paddingBottom: '50px',
        transform: 'skewY(-7deg)',
    },
    form: {
        padding: '4vh', 
        width: '25vw',
    },
    '@media (max-width: 600px)': {
        form: {
            width: '60vw',
        },
    }
}));

export default function Contact() {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleInputs(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    return <div id='contact' className={classes.contact}>
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            style={{ transform: 'skewY(7deg)' }}
        >
            <Box component={Paper} elevation={18} data-aos='fade-left' className={classes.form}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        type='text'
                        variant='outlined'
                        label='Nombre'
                        name='name'
                        value={inputs.name}
                        onChange={handleInputs}
                        style={{ marginBottom: '3vh' }}
                    />
                    <TextField
                        required
                        fullWidth
                        type='email'
                        variant='outlined'
                        label='Email'
                        name='email'
                        value={inputs.email}
                        onChange={handleInputs}
                        style={{ marginBottom: '3vh' }}
                    />
                    <TextField
                        required
                        fullWidth
                        type='text'
                        variant='outlined'
                        label='Asunto'
                        name='subject'
                        value={inputs.subject}
                        onChange={handleInputs}
                        style={{ marginBottom: '3vh' }}
                    />
                    <TextField
                        required
                        fullWidth
                        multiline
                        maxRows={10}
                        type='text'
                        variant='outlined'
                        label='Mensaje'
                        name='message'
                        value={inputs.message}
                        onChange={handleInputs}
                        style={{ marginBottom: '3vh' }}
                    />
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Button fullWidth type='submit' variant='contained' color='primary' style={{ marginTop: '2vh' }}>
                            Enviar
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Grid>
    </div>
}

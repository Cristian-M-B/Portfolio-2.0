import React, { useState, useRef } from 'react';
import { Grid, Box, Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '4vh',
        width: '25vw',
    },
    '@media (max-width: 600px)': {
        form: {
            width: '72vw',
        }
    }
}));

export default function Form() {

    const classes = useStyles();
    const form = useRef();
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
        Swal.fire({
            title: 'Enviando mensaje...',
            text: 'Por favor, aguarde!',
            showConfirmButton: false,
            allowOutsideClick: false,
        });
        emailjs.sendForm('service_rvoh1zs', 'template_jg6hj1a', form.current, 'user_WxPNda96LxtOcDZvrzf5E')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'El mensaje se envió exitosamente!',
                    text: 'Su mensaje será respondido a la brevedad!',
                    confirmButtonText: 'Cerrar',
                    timer: 5000,
                })
            })
            .catch((error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'El mensaje no se pudo enviar!',
                    text: 'Por favor, intente nuevamente!',
                    confirmButtonText: 'Cerrar',
                    timer: 5000,
                })
            });
        setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    return (
        <Box component={Paper} elevation={18} data-aos="fade-up" className={classes.form}>
            <form ref={form} onSubmit={handleSubmit}>
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
    )
}
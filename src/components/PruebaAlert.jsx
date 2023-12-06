import { Box, Snackbar } from '@mui/material';
import React, { useState, useEffect } from 'react';

function PruebaAlert({ colorAlert = '#489558' }) {
    const [mensaje, setMensaje] = useState('');
    const [mostrarToast, setMostrarToast] = useState(false);

    useEffect(() => {
        if (mensaje) {
            setMostrarToast(true);
            setTimeout(() => {
                setMostrarToast(false);
                setMensaje('');
            }, 2000);
        }
    }, [mensaje]);

    const handleButtonClick = () => {
        setMensaje('¡Hola! Este es un mensaje de prueba.');
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Mostrar Toast</button>
            <Snackbar
                open={mostrarToast}
                message={mensaje}
                autoHideDuration={2000}
                onClose={() => setMostrarToast(false)}
                sx={{ '.MuiSnackbarContent-message': {color: colorAlert} }}
            />
        </div>
    );
}

export default PruebaAlert;
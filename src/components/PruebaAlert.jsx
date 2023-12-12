import { Box, Snackbar } from '@mui/material';
import React, { useState, useEffect } from 'react';

function PruebaAlert({ colorAlert = '#489558', changeMsg, mensaje="" }) {
  
    // const [mostrarToast, setMostrarToast] = useState(false);

    useEffect(() => {
        if (mensaje) {
            // setMostrarToast(true);
            setTimeout(() => {
                // setMostrarToast(false);
                changeMsg('');
            }, 5000);
        }
    }, [mensaje]);


    return (
        <div>
            {/* <button onClick={handleButtonClick}>Mostrar Toast</button> */}
            <Snackbar
                open={Boolean(mensaje)}
                message={mensaje}
                autoHideDuration={2000}
                onClose={() => changeMsg(false)}
                sx={{ '.MuiSnackbarContent-message': {color: colorAlert} }}
            />
        </div>
    );
}

export default PruebaAlert;
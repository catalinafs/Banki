import { useEffect } from 'react';
import { Snackbar } from '@mui/material';

function PruebaAlert({ colorAlert = '#489558', changeMsg, mensaje = "" }) {
    useEffect(() => {
        if (mensaje) {
            setTimeout(() => {
                changeMsg('');
            }, 5000);
        }
    }, [mensaje]);


    return (
        <Snackbar
            open={Boolean(mensaje)}
            message={mensaje}
            autoHideDuration={2000}
            onClose={() => changeMsg(false)}
            sx={{ '.MuiSnackbarContent-message': { color: colorAlert } }}
        />
    );
}

export default PruebaAlert;
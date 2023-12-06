import { Alert as MuiAlert, Snackbar } from '@mui/material';

const Alert = ({ isOpen, text, textColor, Severity }) => {

    if (isOpen) {
        return (
            <Snackbar
                // open={isOpen}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                TransitionComponent='left'
            >
                <MuiAlert severity={Severity} color={Severity} sx={{ color: textColor, fontSize: '16px' }}>
                    {text}
                </MuiAlert>
            </Snackbar>
        );
    } else {
        return '';
    };
}

export default Alert;
import { Typography } from '@mui/material';
import colors from '../../utils/colors';
import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = "404 | Banki";
    }, []);

    return (
        <>
            <Typography variant="h3" color={colors.text}>404 perdiste</Typography>
            <Typography variant="h3" color={colors.text}>Te metiste en no se donde</Typography>
        </>
    );
}

export default NotFound;
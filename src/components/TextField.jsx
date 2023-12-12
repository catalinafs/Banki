import { TextField as Input } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../utils/colors';

const Field = styled(Input)({
    '& label': {
        fontWeight: 500,
        color: '#fff',
    },
    '& label.Mui-focused': {
        fontWeight: 600,
        color: '#39d894',
    },
    '& .Mui-focused.MuiInput-underline:after': {
        borderBottomColor: '#39d894',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#27b478',
        },
        '&:hover fieldset': {
            borderColor: '#27b478',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#27b478',
        },
    },
    ".css-10czeob-MuiInputBase-root-MuiInput-root:before, .css-10czeob-MuiInputBase-root-MuiInput-root:hover, .css-10czeob-MuiInputBase-root-MuiInput-root:before": {
        borderBottom: "2px solid #27b478"
    },
    "input": {
        color: colors.white
    }
});

const TextField = ({
    labelField,
    inputType = 'text',
    nameField,
    placeholderText,
    valueState,
    err,
    helper,
    eventOnChange,
}) => {
    return (
        <Field
            variant='standard'
            label={labelField}
            type={inputType}
            size='small'
            name={nameField}
            placeholder={placeholderText}
            value={valueState}
            error={err}
            helperText={helper}
            onChange={eventOnChange}
        />
    );
}

export default TextField;

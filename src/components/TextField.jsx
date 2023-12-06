import { TextField as Input } from '@mui/material';
import styled from '@emotion/styled';

const Field = styled(Input)({
    '& label': {
        color: '#39d894',
        paddingRight: 1
    },
    '& .MuiInput-underline:after': {
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
});

const TextField = ({
    label,
    name,
    placeholderText,
    valueState,
    err,
    helper,
    eventOnChange,
    inputLabelProps
}) => {
    return (
        <Field
            label={label}
            type='text'
            size='small'
            name={name}
            placeholder={placeholderText}
            value={valueState}
            error={err}
            helperText={helper}
            onChange={eventOnChange}
            InputLabelProps={inputLabelProps}
        />
    );
}

export default TextField;

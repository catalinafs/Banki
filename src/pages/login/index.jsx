import { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Stack, TextField as Input, Typography, Container, Box, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../../utils/colors';
import useValidate from '../../hooks/useValidate';
import bank from '../../utils/instance';
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import PruebaAlert from '../../components/PruebaAlert';
import { useTheme } from '@emotion/react';
// todo: resolver el estilo de los inputs
// import TextField from '../../components/TextField';

const initForm = {
    account: '',
    password: ''
};

const TextField = styled(Input)({
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
        // borderBottom: "2px solid #f8f8f8"
    },
    "input": {
        color: colors.white
    }
});

const regex = {
    account: /^\d+$/,
    password: /^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,15}/,
};

const Login = () => {
    const [form, setForm] = useState(initForm);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState('');
    const [isSuccessful, setIsSuccessful] = useState('');

    const navigate = useNavigate();

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));

    const handleOnChange = ({ target }) => {
        const { value, name } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const { formError, accionValidations } = useValidate(initForm);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ok = accionValidations(form, regex);

        // ! delete
        console.log(ok);
        if (ok) {
            return;
        }

        setLoading(true);
        try {
            // ! delete
            console.log(loading);
            console.log(form);
            
            const { data } = await bank.post('login', form);
            // ! delete
            // console.log(data)
            setIsSuccessful(data.msg);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            setIsError('');
            setLoading(false);

            setTimeout(() => {
                setIsSuccessful('');
                navigate('/home');
            }, 1000);
        } catch (error) {
            // ! delete
            console.log(error);

            setLoading(false);
            setIsSuccessful('');
            setIsError(error.response.data.msg);
        }
        // ! delete
        console.log(data);
    }

    return (
        <Layout navTo='/login'>
            <Container maxWidth="sm">
                <PruebaAlert />
                <Stack
                    marginTop={{ xs: '50px', md: '60px' }}
                    padding={{ xs: '60px 30px', md: '60px 40px 90px 40px' }}
                    width={{ xs: '100%', sm: 'auto' }}
                    alignItems='center'
                    sx={{
                        backgroundColor: 'rgba(33, 33, 33, 0.75)',
                        borderRadius: '20px',
                    }}
                >
                    <Typography
                        variant='h4'
                        color={colors.primary}
                        fontSize='22px'
                        margin='10px 0 25px 0'
                        paddingX='30px'
                        display='flex'
                        alignItems='baseline'
                        justifyContent='center'
                    >
                        {
                            !md
                                ? '¡Welcome!'
                                : (
                                    <>
                                        ¡Welcome to your <Typography
                                            variant="body1"
                                            color={colors.text}
                                            fontSize='inherit'
                                            fontWeight={600}
                                            marginLeft={1}
                                            marginRight={.2}
                                        >trusted bank
                                        </Typography>!
                                    </>
                                )
                        }
                    </Typography>

                    {/* Form */}
                    <Stack
                        component='form'
                        role='form'
                        width={{ xs: '100%', sm: '325px' }}
                        spacing='28px'
                        onSubmit={handleSubmit}
                    >
                        <Stack spacing='18px'>
                            {/* Username input */}
                            <TextField
                                variant="standard"
                                label='Account'
                                type='text'
                                size='small'
                                name='account'
                                placeholder='Enter your account'
                                value={form?.account}
                                error={!!formError?.account}
                                helperText={formError?.account}
                                onChange={handleOnChange}
                            />

                            {/* Password input */}
                            <TextField
                                variant="standard"
                                label='Password'
                                type='password'
                                size='small'
                                name='password'
                                placeholder='Enter a password'
                                value={form?.password}
                                error={!!formError?.password}
                                helperText={formError?.password}
                                onChange={handleOnChange}
                            />
                        </Stack>

                        {/* Log in Button */}
                        <Button variant='contained' type='submit'>
                            Register
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <Alert
                // isOpen={Boolean(isSuccessful)}
                text={isSuccessful}
                Severity='success'
                textColor={colors.success}
            />
            <Alert
                // isOpen={Boolean(isError)}
                text={isError}
                Severity='error'
                textColor={colors.error}
            />
        </Layout>
    );
}

export default Login;
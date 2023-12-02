import { useState } from 'react';
import Layout from '../../components/Layout';
import { Button, Stack, TextField as Input, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';
import colors from '../../utils/colors';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const initForm = {
    account: '',
    password: ''
};

const TextField = styled(Input)({
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

const regex = {
    account: /^\d+$/,
    password: /^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+${8,15}/,
};

const Login = () => {
    const [form, setForm] = useState(initForm);

    const navigate = useNavigate();

    const handleOnChange = ({ target }) => {
        const { value, name } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const { formError, accionValidations } = useAuth(initForm);

    const handleSubmit = (e) => {
        e.preventDefault();

        accionValidations(form, regex);
    }

    return (
        <Layout>
            <Container maxWidth="sm">
                <Stack
                    marginTop={{ xs: '50px', md: '60px' }}
                    padding={{ xs: '30px', md: '40px 40px 70px 40px' }}
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
                        margin='10px 0 40px 0'
                        paddingX='30px'
                        display='flex'
                        alignItems='baseline'
                        justifyContent='center'
                    >
                        ¡Welcome to your <Typography variant="body1" color={colors.secondary} fontSize='inherit' marginLeft={1}>
                            trusted bank
                        </Typography>!
                    </Typography>

                    {/* Form */}
                    <Stack
                        component='form'
                        role='form'
                        width={{ xs: '100%', sm: '325px' }}
                        spacing='20px'
                        margin='0 0 5px 0'
                        onSubmit={handleSubmit}
                    >
                        {/* Username input */}
                        <TextField
                            label='Account'
                            type='text'
                            size='small'
                            name='account'
                            placeholder='Enter your account'
                            value={form?.account}
                            error={!!formError?.account}
                            helperText={formError?.account}
                            onChange={handleOnChange}
                            InputLabelProps={{
                                style: {
                                    color: colors.primary,
                                }
                            }}
                        />

                        {/* Password input */}
                        <TextField
                            label='Password'
                            type='text'
                            size='small'
                            name='password'
                            placeholder='Enter a password'
                            value={form?.password}
                            error={!!formError?.password}
                            helperText={formError?.password}
                            onChange={handleOnChange}
                            InputLabelProps={{
                                style: {
                                    color: colors.primary,
                                }
                            }}
                        />

                        {/* Log in Button */}
                        <Button variant='contained' type='submit' >
                            Register
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            {/* <Alert
                isOpen={Boolean(isSuccessful)}
                text={isSuccessful}
                Severity='success'
                textColor={colors.success}
            />
            <Alert
                isOpen={Boolean(isError)}
                text={isError}
                Severity='error'
                textColor={colors.error}
            /> */}
        </Layout>
    );
}

export default Login;
import { useState } from 'react';
import useValidate from '../../hooks/useValidate';
import useAxios from '../../hooks/useAxios';
import Layout from '../../components/Layout';
import TextField from '../../components/TextField';
import { useTheme } from '@emotion/react';
import {
    Backdrop,
    Button,
    CircularProgress,
    Container,
    Snackbar,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';
import colors from '../../utils/colors';

const initForm = {
    account: '',
    password: ''
};

const regex = {
    account: /^\d+$/,
    password: /^[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,15}/,
};

const Login = () => {
    const [form, setForm] = useState(initForm);

    const { formError, accionValidations } = useValidate(initForm);
    const { request, isError, loading, isSuccessful } = useAxios();

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));

    const handleOnChange = ({ target }) => {
        const { value, name } = target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ok = accionValidations(form, regex);

        if (ok) {
            return;
        }

        const { token, user } = await request('login', '/home', 'POST', form);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <Layout navTo='/login' NavBarLinks={false}>
            <Container maxWidth="sm">
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
                                labelField='Account'
                                inputType='text'
                                nameField='account'
                                placeholderText='Enter your account'
                                valueState={form?.account}
                                err={!!formError?.account}
                                helper={formError?.account}
                                eventOnChange={handleOnChange}
                            />

                            {/* Password input */}
                            <TextField
                                labelField='Password'
                                inputType='password'
                                nameField='password'
                                placeholderText='Enter your password'
                                valueState={form?.password}
                                err={!!formError?.password}
                                helper={formError?.password}
                                eventOnChange={handleOnChange}
                            />
                        </Stack>

                        {/* Log in Button */}
                        <Button variant='contained' type='submit'>
                            Register
                        </Button>
                    </Stack>
                </Stack>
            </Container>

            {/* Success Alert */}
            <Snackbar
                open={Boolean(isSuccessful)}
                message={isSuccessful}
                autoHideDuration={2000}
                sx={{ '.MuiSnackbarContent-message': { color: colors.success } }}
            />

            {/* Error Alert */}
            <Snackbar
                open={Boolean(isError)}
                message={isError}
                autoHideDuration={2000}
                sx={{ '.MuiSnackbarContent-message': { color: colors.error } }}
            />

            {/* Backdrop for the loading */}
            <Backdrop
                sx={{ color: colors.white, zIndex: '100' }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Layout>
    );
}

export default Login;
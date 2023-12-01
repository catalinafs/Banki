import Layout from '../../components/Layout';
import MuiLink from '../../components/MuiLink';
import { Button, Stack, TextField, Typography, Container } from '@mui/material';
import colors from '../../utils/colors';

const Login = () => {
    return (
        <Layout>
            <Container maxWidth="sm">
                <Stack
                    marginTop={{ xs: '50px', md: '60px' }}
                    padding={{ xs: '30px', md: '30px 50px' }}
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
                    >¡Welcome to your trusted bank!</Typography>

                    {/* Form */}
                    <Stack
                        component='form'
                        role='form'
                        width={{ xs: '100%', sm: '325px' }}
                        spacing='20px'
                        margin='0 0 25px 0'
                    // onSubmit={handleSubmit}
                    >
                        {/* Username input */}
                        <TextField
                            label='Account'
                            type='text'
                            size='small'
                            name='account'
                            placeholder='Enter your account'
                        // value={form?.account}
                        // error={!!formError.account}
                        // helperText={formError.account}
                        // onChange={handleOnChange}
                        />

                        {/* Password input */}
                        <TextField
                            label='Email'
                            type='text'
                            size='small'
                            name='password'
                            placeholder='Enter a password'
                        // value={form?.password}
                        // error={!!formError.password}
                        // helperText={formError.password}
                        // onChange={handleOnChange}
                        />

                        {/* Log in Button */}
                        <Button variant='contained' type='submit'>
                            Register
                        </Button>

                        {/* Sign up link */}
                        <Typography
                            variant='body2'
                            color={colors.lightText}
                            marginTop='25px'
                            marginBottom='20px'
                            textAlign='center'
                        >
                            ¿Todavía no tienes cuenta?{' '}
                            <MuiLink
                                styles={{
                                    color: colors.links,
                                    textDecoration: 'none',
                                    fontFamily: 'Glacial Indifference Bold',
                                }}
                                navigateTo='/register'
                                text='Registrate'
                            />
                        </Typography>
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
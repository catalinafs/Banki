import { useEffect, useState } from 'react';
import useValidate from '../../hooks/useValidate';
import useAxios from '../../hooks/useAxios';
import Layout from '../../components/Layout';
import TextField from '../../components/TextField';
import {
    Backdrop,
    Button,
    CircularProgress,
    Container,
    Snackbar,
    Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import colors from '../../utils/colors';

const initForm = {
    account_recive: '',
    amount: ''
};

const regex = {
    account_recive: /^\d+$/,
    amount: /^\d+$/,
};

const Transfer = () => {
    const [form, setForm] = useState(initForm);

    const { formError, accionValidations } = useValidate(initForm);
    const { request, isError, isSuccessful, loading } = useAxios();

    useEffect(() => {
        document.title = "Transfers | Banki";
    }, []);

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

        const user = JSON.parse(localStorage.getItem("user"));

        const body = {
            amount: parseInt(form.amount),
            account_recive: form.account_recive,
        };

        body.id = user.id;
        body.token = localStorage.getItem("token");

        const headers = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
        };

        const { new_money } = await request('movements', '/home', 'POST', body, headers);

        localStorage.setItem("user", JSON.stringify({ ...user, money: new_money }));
    }

    return (
        <Layout navTo='/home' NavBarLinks={true}>
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
                    {/* Form */}
                    <Stack
                        component='form'
                        role='form'
                        width={{ xs: '100%', sm: '325px' }}
                        spacing='28px'
                        onSubmit={handleSubmit}
                    >
                        <Stack spacing='18px'>
                            {/* account recive input */}
                            <TextField
                                labelField='Account Recive'
                                inputType='text'
                                nameField='account_recive'
                                placeholderText='Enter the account recive'
                                valueState={form?.account_recive}
                                err={!!formError?.account_recive}
                                helper={formError?.account_recive}
                                eventOnChange={handleOnChange}
                            />

                            {/* money input */}
                            <TextField
                                labelField='Amount'
                                inputType='text'
                                nameField='amount'
                                placeholderText='Enter an amount'
                                valueState={form?.amount}
                                err={!!formError?.amount}
                                helper={formError?.amount}
                                eventOnChange={handleOnChange}
                            />
                        </Stack>

                        {/* Log in Button */}
                        <Button
                            variant='contained'
                            type='submit'
                            sx={{ fontSize: '15px' }}
                            endIcon={<SendIcon />}
                        >
                            Transfer
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
            {console.log('existe el error: ', isError)}
            <Snackbar
                open={Boolean(isError)}
                message={`${isError}`}
                autoHideDuration={2000}
                sx={{ '.MuiSnackbarContent-message': { color: colors.error } }}
            />

            {/* Backdrop for the loading */}
            <Backdrop
                sx={{ color: '#fff', zIndex: '100' }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Layout>
    );
}

export default Transfer;
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Layout from '../../components/Layout';
import { Stack, Typography, Container } from '@mui/material';
import colors from '../../utils/colors';

const Movements = () => {
    const [account, setAccount] = useState();
    const [movements, setMovements] = useState();

    const { request, isError, isSuccessful, loading } = useAxios();

    useEffect(() => {
        document.title = "Movements | Banki";

        const { id, account } = JSON.parse(localStorage.getItem("user"));

        setAccount(account);

        (async () => {
            const data = await request(`/movements/${id}`);

            console.log(data);

            setMovements(data.reverse());
        })();
    }, []);

    return (
        <Layout NavBarLinks={true} >
            <Container maxWidth="sm" >
                <Stack spacing={4} marginY={5} marginX={{ xs: 2, sm: 10 }}>
                    {
                        movements?.map(({ id_transaction, amount, account_usuario_send, account_usuario_recive }) => {
                            const colorMoney = account_usuario_recive == account ? colors.success : colors.error;

                            return (
                                <Stack
                                    key={id_transaction}
                                    padding='25px'
                                    direction='row'
                                    justifyContent='space-between'
                                    borderRadius='10px'
                                    boxShadow='0 8px 32px 0 rgba(122, 122, 122, 0.37)'
                                    border='1px solid rgba(255, 255, 255, 0.18)'
                                    sx={{
                                        background: 'rgba(33, 33, 33, 0.75)',
                                        backdropFilter: 'blur(4px)',
                                        '-webkit-backdrop-filter': 'blur(4px)',
                                    }}
                                >
                                    <Typography variant="body1" color={colors.white}>
                                        {account_usuario_recive == account ? account_usuario_send : account_usuario_recive}
                                    </Typography>
                                    <Typography variant="body1" color={colorMoney}>
                                        {account_usuario_recive == account ? `$ ${amount}` : `-$ ${amount}`}
                                    </Typography>
                                </Stack>
                            );
                        })
                    }
                </Stack>
            </Container>
        </Layout >
    );
}

export default Movements;

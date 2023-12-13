import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Layout from '../../components/Layout';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';

const Movements = () => {
    const [movements, setMovements] = useState();

    const { request, isError, isSuccessful, loading } = useAxios();

    useEffect(() => {
        const { id } = JSON.parse(localStorage.getItem("user"));

        (async () => {
            const data = await request(`/movements/${id}`);

            console.log(data);

            setMovements(data);
        })();
    }, [])

    return (
        <Layout NavBarLinks={true} >
            <Container maxWidth="sm">
                <Stack spacing={4} marginY={5}>
                    {
                        movements?.map(({ id_transaction, amount, account_usuario_send, name_user_recive }) => {
                            return (
                                <Stack
                                    key={id_transaction}
                                    direction='row'
                                    justifyContent='space-between'
                                    bgcolor={'#fff'}
                                >
                                    <Typography variant="body1" color="initial">{amount}</Typography>
                                    <Typography variant="body1" color="initial">{account_usuario_send}</Typography>
                                    {/* <Typography variant="body1" color="initial">{name_user_recive}</Typography> */}
                                </Stack>
                            );
                        })
                    }
                </Stack>
            </Container>
        </Layout>
    );
}

export default Movements;

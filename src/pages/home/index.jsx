import useCapitalize from '../../hooks/useCapitalize';
import Layout from '../../components/Layout';
import { useTheme } from '@emotion/react';
import { Stack, Container, useMediaQuery, Typography } from '@mui/material';
import colors from '../../utils/colors';

const Home = () => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));

    const { id, name, money, account } = JSON.parse(localStorage.getItem("user"));

    // const links = [
    //     {
    //         id: 1,
    //         page: 'Home',
    //         path: '/home',
    //     },
    //     {
    //         id: 2,
    //         page: 'Transfers',
    //         path: '/transfers',
    //     },
    //     {
    //         id: 3,
    //         page: 'Movements',
    //         path: `/movements/${id}`,
    //     },
    // ];

    return (
        <Layout NavBarLinks={true}>
            <Container maxWidth="md">
                <Stack
                    marginTop={{ xs: 10, md: 10 }}
                    paddingX={{ xs: 4, md: 8 }}
                    paddingY={{ xs: 6, md: 8 }}
                    spacing={5}
                    borderRadius='10px'
                    bgcolor='rgba(33, 33, 33, 0.41)'
                    boxShadow='0 0px 15px rgba(0, 0, 0, 0.1)'
                    border='1px solid rgba(33, 33, 33, 0.15)'
                // ? check: si se va a dejar el blur o no
                // sx={{
                //     backdropFilter: 'blur(4.4px)',
                // }}
                >
                    <Stack
                        direction={{ xs: 'row', sm: 'row' }}
                        // direction={{ xs: 'column-reverse', sm: 'row' }}
                        alignItems={{ xs: 'baseline', sm: 'baseline' }}
                        justifyContent='space-between'
                    >
                        <Stack
                            direction={{ xs: 'row', sm: 'row' }}
                            justifyContent={{ xs: 'start', sm: 'center' }}
                            alignItems='center'
                            spacing={{ xs: .5, md: 1 }}
                        >
                            {/* // ? check: definir como se va a terminar viendo el home */}
                            {
                                md
                                    ?
                                    <Typography
                                        variant="h2"
                                        color={colors.text}
                                        fontSize={{ xs: '28px', md: '30px' }}
                                        fontWeight={600}
                                    >Welcome{md ? ' back' : ''},</Typography>
                                    : ''
                            }
                            <Typography
                                variant="body1"
                                color={colors.primary}
                                fontSize={{ xs: '28px', md: '30px' }}
                                fontWeight={800}
                            // ? check: definir como se va a terminar viendo el home
                            // padding={{ xs: '', sm: '5px 20px' }}
                            // bgcolor={{ xs: '', sm: '#ffffff1a' }}
                            // borderBottom={{ xs: '', sm: '5px solid #39d894' }}
                            // borderRadius='250px'
                            >{useCapitalize(name)}</Typography>
                        </Stack>
                        <Typography
                            // width={{ xs: '100%', sm: 'auto' }}
                            marginBottom={2}
                            variant="h4"
                            fontSize={{ xs: '20px', sm: '28px' }}
                            color={colors.text}
                            textAlign='right'
                        // ? check: definir como se va a terminar viendo el home
                        // padding='5px 15px 5px 15px'
                        // bgcolor='#ffffff1a'
                        // borderBottom='5px solid #f8f8f8'
                        // borderRadius='250px'
                        >No. {account}</Typography>
                    </Stack>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography
                            variant="h5"
                            fontSize={{ xs: '28px', sm: '40px' }}
                            fontWeight={700}
                            padding='5px 15px'
                            color={colors.secondary}
                            textAlign='center'
                            borderBottom='4px solid #a37e36'
                        // ? check: definir como se va a terminar viendo el home
                        // borderBottom='6px solid #a37e36'
                        // bgcolor='#ffffff0a'
                        // borderRadius='250px'
                        >
                            $ {money || '0'}.00
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    );
}

export default Home;

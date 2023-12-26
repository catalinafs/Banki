import useCapitalize from '../../hooks/useCapitalize';
import Layout from '../../components/Layout';
import { useTheme } from '@emotion/react';
import { Stack, Container, useMediaQuery, Typography } from '@mui/material';
import colors from '../../utils/colors';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Banki";
    }, []);

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));

    const { name, money, account } = JSON.parse(localStorage.getItem("user"));

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
                >
                    <Stack
                        direction={{ xs: 'row', sm: 'row' }}
                        alignItems={{ xs: 'baseline', sm: 'baseline' }}
                        justifyContent='space-between'
                    >
                        <Stack
                            direction={{ xs: 'row', sm: 'row' }}
                            justifyContent={{ xs: 'start', sm: 'center' }}
                            alignItems='center'
                            spacing={{ xs: .5, md: 1 }}
                        >
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
                            >{useCapitalize(name)}</Typography>
                        </Stack>
                        <Typography
                            marginBottom={2}
                            variant="h4"
                            fontSize={{ xs: '20px', sm: '28px' }}
                            color={colors.text}
                            textAlign='right'
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

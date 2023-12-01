import Layout from '../../components/Layout';
import Typography from '@mui/material/Typography'
import colors from '../../utils/colors';
import { Stack, Container } from '@mui/material';


const links = [
    {
        id: 1,
        page: 'Home',
        path: '/home',
    },
    {
        id: 1,
        page: 'Transfers',
        path: '/transfers',
    },
    {
        id: 2,
        page: 'Movements',
        path: '/movements',
    },
];

const Home = () => {
    return (
        <Layout NavBarLinks={links}>
            <Container maxWidth="md">
                <Stack
                marginTop={30}
                    paddingX={6}
                    paddingY={8}
                    spacing={5}
                    borderRadius='10px'
                    sx={{
                        backgroundColor: 'rgba(33, 33, 33, 0.41)',
                        backdropFilter: 'blur(10px)',
                        // backdropFilter: 'blur(4.4px)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(33, 33, 33, 0.15)'
                    }}
                    // sx={{
                    //     backgroundColor: 'rgba(33, 33, 33, 0.75)',
                    //     backdropFilter: 'blur(12px) saturate(180%)',
                    // }}
                >
                    <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Stack direction='row' alignItems='center' spacing={1}>
                            <Typography
                                variant="h2"
                                color={colors.text}
                                fontSize={{ md: '35px' }}
                                fontWeight={600}
                            // textAlign='left'
                            >Welcome back,</Typography>
                            <Typography
                                variant="body1"
                                color={colors.primary}
                                fontSize={{ md: '40px' }}
                                fontWeight={800}
                            // textAlign='right'
                            >Catalina</Typography>
                        </Stack>
                        <Typography
                            variant="h4"
                            color={colors.text}
                        >012</Typography>
                    </Stack>
                    <Typography
                        variant="h5"
                        color={colors.secondary}
                        textAlign='center'
                    >
                        $ 11,000.00
                    </Typography>
                </Stack>
            </Container>
        </Layout>
    );
}

export default Home;

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
                    marginTop={8}
                    paddingX={6}
                    paddingY={8}
                    spacing={5}
                    borderRadius='10px'
                    bgcolor='rgba(33, 33, 33, 0.41)'
                    boxShadow='0 0px 15px rgba(0, 0, 0, 0.1)'
                    border='1px solid rgba(33, 33, 33, 0.15)'
                    sx={{
                        backdropFilter: 'blur(4.4px)',
                    }}
                >
                    <Stack
                        direction='row'
                        alignItems='baseline'
                        justifyContent='space-between'
                    >
                        <Stack direction='row' alignItems='center' spacing={1}>
                            <Typography
                                variant="h2"
                                color={colors.text}
                                fontSize={{ md: '30px' }}
                                fontWeight={600}
                            >Welcome back,</Typography>
                            <Typography
                                variant="body1"
                                color={colors.primary}
                                fontSize={{ md: '30px' }}
                                fontWeight={800}
                            >Catalina</Typography>
                        </Stack>
                        <Typography
                            variant="h4"
                            color={colors.text}
                        >No. 012</Typography>
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

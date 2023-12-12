import Layout from '../../components/Layout';

const Movements = () => {
    const user = localStorage.getItem("user");

    const links = [
        {
            id: 1,
            page: 'Home',
            path: '/home',
        },
        {
            id: 2,
            page: 'Transfers',
            path: '/transfers',
        },
        {
            id: 3,
            page: 'Movements',
            path: `/movements/${user.id}`,
        },
    ];

    console.log(window.location.pathname)

    return (
        <Layout NavBarLinks={links} >
            movements
        </Layout>
    );
}

export default Movements;

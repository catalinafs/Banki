import { Link as LinkWithoutStyles, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import colors from '../utils/colors';

const Link = styled(LinkWithoutStyles)({
    textDecoration: 'none',
});

const NavBar = ({ links, navigateTo = '/home' }) => {
    const [anchorElNav, setAnchorElNav] = useState();
    const [anchorElUser, setAnchorElUser] = useState();

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // todo: si te elimina los datos del localstorage pero no te redirige al login

    const handleLogOut = () => {
        localStorage.clear();
        // setAnchorElUser(null);
    };


    return (
        <AppBar
            position="sticky"
            elevation={0}
            component='header'
            sx={{
                backgroundColor: 'rgba(33, 33, 33, 0.75)',
                backdropFilter: 'blur(12px) saturate(180%)',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    component='nav'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: links ? 'space-between' : 'center'
                    }}
                >
                    <Stack display={{ xs: links ? 'flex' : 'none', md: 'none' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenNavMenu} sx={{ p: 0, color: '#3d3d3d' }}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {
                                links?.map(({ id, page, path }) => {
                                    let pathActive = window.location.pathname === path;
                                    let colorText = pathActive ? colors.primary : colors.black;

                                    return (
                                        <MenuItem key={id} onClick={handleCloseNavMenu}>
                                            <Link
                                                to={path}
                                            >
                                                <Typography textAlign="center" color={colorText}>
                                                    {page}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    );
                                })
                            }
                        </Menu>
                    </Stack>

                    <Link to={navigateTo}>
                        <Typography
                            variant="h1"
                            fontSize={{ xs: '45px', md: '60px' }}
                            fontWeight={900}
                            color={colors.text}
                            display='flex'
                            flexDirection='row'
                            alignItems='baseline'
                            justifyContent='center'
                        >Bank<Typography color={colors.primary} fontSize={{ xs: '45px', md: '60px' }} fontWeight={900}>i</Typography></Typography>
                    </Link>


                    <Stack
                        display={{ xs: 'none', md: links ? 'flex' : 'none' }}
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                        spacing='40px'
                    >
                        {
                            links?.map(({ id, page, path }) => {
                                let pathActive = window.location.pathname === path;
                                let linkActive = pathActive ? 'contained' : 'text';
                                let colorText = pathActive ? colors.text : colors.primary;

                                return (
                                    <Button
                                        key={id}
                                        variant={linkActive}
                                        sx={{ color: colorText }}
                                        onClick={() => navigate(path)}
                                    >{page}</Button>
                                );
                            })
                        }
                    </Stack>

                    <Box sx={{ flexGrow: 0, display: links ? 'block' : 'none' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                                <Avatar
                                    alt="Catalina Forero"
                                    src="/static/images/avatar/2.jpg"
                                    sx={{ backgroundColor: colors.greenDark }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleLogOut}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default NavBar;
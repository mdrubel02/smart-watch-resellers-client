import { AppBar, Avatar, Box, Button, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useContext, useState } from 'react';
import {Link as RouterLink, useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../../Context/User/UserContext';
import { tokens } from '../../../Theme/Theme';
import NavBarDrawer from './NavBarDrawer';
import Account from './Account';
import './Header.css'
import useAdmin from '../../../Hooks/useAdmin/useAdmin';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    const navigate = useNavigate()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [state, setState] = useState({ left: false });


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout');
                navigate('/home')
            })
            .then((error) => {
                console.log(error)
            })
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const items = <React.Fragment>
        <Button sx={{ color: 'white' }} component={RouterLink} to="/home">Home</Button>
        <Button sx={{ color: 'white' }} component={RouterLink} to="/category">Category</Button>
        {user?.email && <Button sx={{ color: 'white' }} component={RouterLink} to="/addProduct">AddProducts</Button>}
        {user?.email && <Button sx={{ color: 'white' }} component={RouterLink} to="/myProduct">MyProducts</Button>}
        { <Button sx={{ color: 'white' }} component={RouterLink} to="/dashboard">Dashboard</Button>}
        <Button sx={{ color: 'white' }} component={RouterLink} to="/blog">Blog</Button>
        {user?.email && <Button
            onClick={handleLogOut}
            color='secondary'
            variant="outlined" component={RouterLink} to='/signUp' startIcon={<LoginIcon />}>
            LogOut
        </Button>}
    </React.Fragment>
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    //drawer
    const toggleDrawer = (anchor,open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open  });
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Smart Watch
                    </Typography>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Box className='middle' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={toggleDrawer(anchor, true)}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    >
                                    <NavBarDrawer isAdmin={isAdmin} toggleDrawer={toggleDrawer} anchor={anchor} />
                                    {/* {list(anchor)} */}
                                </Drawer>
                            </Box>
                        </React.Fragment>
                    ))}

                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                       Smart Watch
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ color: `${colors.grey[400]} !important`, my: 2, display: 'block' }}
                        >
                            {items}
                        </Button>

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {user?.email ? <Box>
                            <Tooltip title={user?.displayName}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {user?.photoURL ? <Avatar alt="Remy Sharp" src={user?.photoURL} /> :
                                        <Avatar style={avatarStyle}><PersonOutlineIcon /></Avatar>}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: '500px' }}
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
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}
                                <MenuItem>
                                    <Account />
                                </MenuItem>
                            </Menu>
                        </Box> :
                            <Button
                                color='secondary'
                                variant="outlined" component={RouterLink} to='/signUp' startIcon={<LoginIcon />}>
                                SignUp
                            </Button>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
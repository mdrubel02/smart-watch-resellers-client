import React, { useContext } from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import LoginIcon from '@mui/icons-material/Login';
import { AuthContext } from '../../../Context/User/UserContext';


const NavBarDrawer = ({isAdmin, toggleDrawer, anchor }) => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

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

    return (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem >
                    <ListItemButton component={RouterLink} to="/home">
                        <ListItemIcon> <HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemButton component={RouterLink} to="/category">
                        <ListItemIcon> <CategoryIcon /></ListItemIcon>
                        <ListItemText>Category</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                { <ListItem >
                    <ListItemButton component={RouterLink} to="/dashboard">
                        <ListItemIcon> <DashboardIcon /></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItemButton>
                    <Divider />
                </ListItem>}
              { user?.email && <ListItem >
                    <ListItemButton component={RouterLink} to="/addProduct">
                        <ListItemIcon> <PostAddIcon /></ListItemIcon>
                        <ListItemText>AddProduct</ListItemText>
                    </ListItemButton>
                    <Divider />
                </ListItem>}
                { user?.email &&<ListItem >
                    <ListItemButton component={RouterLink} to="/myProduct">
                        <ListItemIcon> <PostAddIcon /></ListItemIcon>
                        <ListItemText>MyProduct</ListItemText>
                    </ListItemButton>
                    <Divider />
                </ListItem>}
                { user?.email &&<ListItem >
                    <ListItemButton component={RouterLink} to="/myBookings">
                        <ListItemIcon> <PostAddIcon /></ListItemIcon>
                        <ListItemText>MyBookings</ListItemText>
                    </ListItemButton>
                    <Divider />
                </ListItem>}
              
                <ListItem >
                    <ListItemButton component={RouterLink} to="/blog">
                        <ListItemIcon> <BookIcon /></ListItemIcon>
                        <ListItemText>Blog</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem >
                    {user?.email &&<ListItemButton onClick={handleLogOut}>
                        <ListItemIcon> <LoginIcon /></ListItemIcon>
                        <ListItemText>LogOut</ListItemText>
                    </ListItemButton>}
                </ListItem>
               
            </List>
            

        </Box>
    );
};

export default NavBarDrawer;
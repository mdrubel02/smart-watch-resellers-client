import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React,{ useContext }  from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { tokens } from '../../Theme/Theme';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import userDefault from '../../assets/user.png'
import { AuthContext } from '../../Context/User/UserContext';
import useAdmin from '../../Hooks/useAdmin/useAdmin';




const SidebarMenu = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    WATCH
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                            {user?.photoURL ? <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={user?.photoURL}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                        :
                                        <img
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={userDefault}
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />}
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {user?.displayName}
                                </Typography>
                              
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <List>
                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Data
                            </Typography>
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/dashboard">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                           {isAdmin && <List>
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/myBookings">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>My-Order</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/allUsers">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>All-User</ListItemText>
                                </ListItemButton>  
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/allSellers">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>All-Sellers</ListItemText>
                                </ListItemButton>  
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/allBuyers">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>All-Buyers</ListItemText>
                                </ListItemButton>  
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <ListItemButton component={RouterLink} to="/dashboard/admin">
                                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                                    <ListItemText>Admin-Panel</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider /> 
                            </List>}
                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                
                            </Typography>
                        </List>
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SidebarMenu;
import { Box, Grid, } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Context/User/UserContext';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import useTitle from '../../Hooks/useTitle/useTitle';
import Loading from '../../Pages/Loading/Loading';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import SidebarMenu from './SidebarMenu';

const DashboardLayout = () => {
    useTitle('dashboard')
    const { user ,loading} = UserContext(AuthContext);
    const [email ,setEmail] =useState(user?.email)
  
    // const [isAdmin] = useAdmin(user?.email)
    if(loading){
        return <Loading></Loading>
    }
    console.log(email)
   
    return (
        <Box sx={{ flexGrow: 1 }}>
                
            <Box>
                <Header />
            </Box>
            <Box>
                <Grid container spacing={0.5}>
                    <Grid item xs={3}>
                        <SidebarMenu ></SidebarMenu>
                    </Grid>
                    <Grid sx={{ marginTop: '2rem' }} item xs={9}>
                      
                        <Outlet></Outlet>
                        
                    </Grid>
                </Grid>
                <Footer />
            </Box>
        </Box>
    );
};

export default DashboardLayout;
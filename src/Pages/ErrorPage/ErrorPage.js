import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import errorPage from '../../assets/Optimized-errorPage.jpg';
import {Link as RouterLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <Box
        sx={{
            backgroundImage: `url(${errorPage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: '.7rem'
        }}
        >
             <Box
                    sx={{
                        width: { xs: "100%", sm: "50%", md: "40%" },
                        padding: { xs: 3, sm: 2, md: 20, lg: 20 },
                        marginTop: {xs: 15, md:0, lg: 0, }
                    }}
                >
                    <Box sx={{ display: 'flex',justifyContent: 'center',alignItems:'end',height: '450px' }}>
                       
                        <Typography variant="h2" pl={3} pr={3} pb={2} sx={{color: 'white'}}>
                            <Link component={RouterLink} to='/home'>Back To Home</Link>
                        </Typography>
                        
                    </Box>
                </Box>
        </Box>
        </Container>
    );
};

export default ErrorPage;
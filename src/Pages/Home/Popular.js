import { Box, Button, Container, styled, Typography } from '@mui/material';
import home from '../../assets/feauter.png'
import React from 'react';

const Popular = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "gray",
        height: "416px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          height: "auto",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(3, 3, 0, 3),
          width: "90%",
        },
      }));
    
      const CustomBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
          padding: "0",
        },
      }));
    return (
        <CustomBox>
               <Typography variant='h3' mb={8} align='center'>Next Feauterd Here</Typography>
        <CustomContainer>
         
          <Box>
            <Typography
              sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
            >
              Featured Properties
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
            >
              Everything you need to know about houses!
            </Typography>
                <Button variant='contained'>Featured</Button>
          </Box>
  
          <img
            src={home}
            alt="illustration"
            style={{ maxWidth: "100%" }}
          />
        </CustomContainer>
      </CustomBox>
    );
};

export default Popular;
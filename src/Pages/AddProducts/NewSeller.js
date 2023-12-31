import { Box, Grid, Paper, styled } from '@mui/material';
import React from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const NewSeller = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
              
            </Grid>
        </Box>
    );
};

export default NewSeller;
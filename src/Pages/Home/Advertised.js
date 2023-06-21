import { Container, Typography } from '@mui/material';
import React from 'react';

const Advertised = () => {
    return (
        <Container mt={8} mb={10}>
            <Typography variant='h2' mb={5}>Advertised</Typography>
            <Typography variant='h4' mb={5}>Coming Soon</Typography>
        </Container>
    );
};

export default Advertised;
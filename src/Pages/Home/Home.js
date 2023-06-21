import { Container } from '@mui/material';
import React from 'react';
import useTitle from '../../Hooks/useTitle/useTitle';
import Advertised from './Advertised';
import Banner from './Banner';
import Popular from './Popular';

const Home = () => {
    useTitle('home')
    return (
        <Container>
            <Banner /> 
            <Advertised /> 
            <Popular/>  
        </Container>
    );
};

export default Home;
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle/useTitle';
import SingleProduct from './SingleProduct/SingleProduct';
import SingleProductDesktop from './SingleProductDesktop/SingleProductDesktop';

const Products = () => {
    useTitle('product')
    const products = useLoaderData();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const renderProducts = products.map((product) => (
        <Grid item key={product._id} xs={12} sm={4} md={4} lg={4} display="flex" flexDirection={'column'} alignItems="center">
            {matches ? (
                <SingleProduct product={product} matches={matches} />
                // <div><h1>hello</h1></div>
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
                // <Box><Typography>{product.name}</Typography></Box>
            )}
        </Grid>
    ));
    return (
        <Container mt={15}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                    {renderProducts}
                
            </Grid>
        </Container>
    );
};

export default Products;
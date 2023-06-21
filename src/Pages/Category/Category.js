import React, { useEffect, useState } from 'react';
import {  Container, Grid } from '@mui/material';
import useTitle from '../../Hooks/useTitle/useTitle';
import CategoriesSingle from './CategoriesSingle/CategoriesSingle';

const Category = () => {
    useTitle('Category')
    const [categories, setCategories] = useState([])
    console.log(categories)

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const renderCategories = categories.map((category) => (
        <Grid item key={category.id} xs={12} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
           <CategoriesSingle category={category} />
        </Grid>
    ));

    return (
        <Container>
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            sx={{ margin: `20px 4px 10px 4px` }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {renderCategories}
        </Grid>
    </Container>
    );
};

export default Category;
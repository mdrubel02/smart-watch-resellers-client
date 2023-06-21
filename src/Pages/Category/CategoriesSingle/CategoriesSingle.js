import React from 'react';
import { Container, Link } from '@mui/material';
import { CategoriesAddToCart, Product, ProductFavButton, ProductImage } from '../../../Styles/Product';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as RouterLink } from 'react-router-dom';
import { CategoryMeta } from '../CategoryMeta';

const CategoriesSingle = ({ category }) => {
    const { banner } = category;
  
    return (
        <Container>
            <Product>
                <ProductImage src={banner} />
                <ProductFavButton isfav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                <CategoryMeta category={category} />
                <Link
                    sx={{ color: 'white', textDecoration: 'none' }}
                    component={RouterLink} to={`/productsDetails/${category.categoryId}`}
                >
                    <CategoriesAddToCart variant="contained">
                        Product
                    </CategoriesAddToCart>
                </Link>
            </Product>
        </Container>
    );
};

export default CategoriesSingle;
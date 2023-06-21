import { Box, Stack, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../../../../Styles/Product';
import { ProductMeta } from '../../../ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import BookingModal from '../BookingModal/BookingModal';
import PrivateRoute from '../../../../../Layout/PrivateRoute/PrivateRoute';

const SingleProduct = ({ product, matches }) => {
    console.log(product)
    const [open, setOpen] = useState(false);
    const [bookings, setBookings] = useState([])
    const handleClickOpen = (product) => {
        setBookings(product);
        setOpen(true);
    };

    const handleClose = () => {
        // console.log(product);
        setOpen(false);
    };
    return (
        <Box>
            <Product >
                <ProductImage src={product.picture} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction={matches ? "row" : "column"}>
                        <ProductFavButton isfav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <Tooltip placement="left" title="share this product">
                                <ShareIcon color="primary" />
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton >
                            <Tooltip placement="left" title="Full view">
                                <FitScreenIcon color="primary" />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <PrivateRoute>
                <ProductAddToCart
                    onClick={() => handleClickOpen(product)}
                    variant="contained">Book now</ProductAddToCart>
            </PrivateRoute>
            </Product>
           

            <BookingModal
                open={open}
                bookings={bookings}
                handleClose={handleClose}
            ></BookingModal>
        </Box>

    );
};

export default SingleProduct;
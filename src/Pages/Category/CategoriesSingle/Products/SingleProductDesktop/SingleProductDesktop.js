import React, { useState } from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../../../../Styles/Product';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { Box, Stack, Tooltip } from '@mui/material';
import { ProductMeta } from '../../../ProductMeta';
import BookingModal from '../BookingModal/BookingModal';
import PrivateRoute from '../../../../../Layout/PrivateRoute/PrivateRoute';

const SingleProductDesktop = ({ product, matches }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookings, setBookings] = useState([])

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };
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
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <ProductImage src={product.picture} />
                <ProductFavButton isfav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                {(showOptions || matches) && (
                    <PrivateRoute>
                        <ProductAddToCart
                            onClick={() => handleClickOpen(product)}
                            show={showOptions} variant="contained">
                            Book  Now
                        </ProductAddToCart>
                    </PrivateRoute>

                )}
                <ProductActionsWrapper show={showOptions || matches}>
                    <Stack direction={matches ? "row" : "column"}>
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
            </Product>
            <ProductMeta product={product} />

            <BookingModal
                open={open}
                bookings={bookings}
                handleClose={handleClose}
            ></BookingModal>

        </Box>
    );
};

export default SingleProductDesktop;
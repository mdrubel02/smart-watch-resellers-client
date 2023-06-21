import React from 'react';
import { Box, Typography } from '@mui/material';
import banner from '../../assets/samsung-removebg-preview.png'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../Styles/banner';


const Banner = () => {
    return (
        <Box mb={8}>
            <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
                Smart<b style={{ color: "red" }}>Watch</b>
            </Typography>
            <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
                We Make you look the better of you!
            </Typography>
            <Box
            // sx={{
            //     backgroundImage: `url(${banner})`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundColor: "black",
            //     backgroundPosition: "center",
            //     backgroundSize: "cover",
            //     height: 600,
            //     width: "100%",
            //     display: "flex",
            //     justifyContent: "end",
            // }}
            >
                <Box
                // sx={{
                //     width: { xs: "100%", sm: "50%", md: "40%" },
                //     padding: { xs: 3, sm: 2, md: 20, lg: 20 },
                //     marginTop: {xs: 15, md:0, lg: 0, }
                // }}
                >
                    <BannerContainer >
                        <BannerImage src={banner} />
                        <BannerContent>
                            <Typography variant="h6">Huge Collection</Typography>
                            <BannerTitle variant="h2">
                                New Watch
                            </BannerTitle>

                            <BannerDescription variant="subtitle">
                            Smartwatches are wristwatch-sized computers with additional functions in addition to timekeeping
                            </BannerDescription>

                            <BannerShopButton color="primary">Shop Now</BannerShopButton>
                        </BannerContent>
                    </BannerContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
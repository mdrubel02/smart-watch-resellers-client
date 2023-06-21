import { Box, Button, Grid, List, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { FooterTitle, SubscribeTf } from '../../../Styles/footer';
import { tokens } from '../../../Theme/Theme';

const Footer = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                background: colors.shaft,
                color: colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                    Telling time is quite self-explanatory; after all, it is a watch. But it can also be used to check the date and week, which is far more convenient
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: colors.dove_gray,
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf
                            color="primary"
                            label="Email address"
                            variant="standard"
                        />
                        <Button
                            startIcon={<SendIcon sx={{ color: colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
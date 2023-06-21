import { Box, Button, IconButton, styled } from "@mui/material";
import { slideInBottom, slideInRight } from '../../Animation/index'
import { tokens } from '../../Theme/Theme'




export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
  
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "60%",
  background: tokens.gray,
  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "50%", 
    padding: '24px',
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: tokens.gray,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }) => ({
  color: isfav ? tokens.primary : tokens.gray,  
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",    
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: tokens.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({ 
  [theme.breakpoints.up("md")]: {
    display: show ? 'visible' : 'none',
    position: "absolute",
    right: 0,
    top: '20%',
    animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  }
}));


//categories
export const CategoriesAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
  },
  background: tokens.secondary,
  opacity: 0.9,
}));


export const GridButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
   
  },
  background: tokens.secondary,
  opacity: 0.9,
}));
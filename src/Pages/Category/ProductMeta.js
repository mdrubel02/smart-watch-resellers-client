import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../Styles/Product";


export  const  ProductMeta= ({ product, matches })=>{
  
    return (
        <ProductMetaWrapper>
          <Typography variant={ "h5"} lineHeight={2}>
            {product.name}
          </Typography>
          <Typography variant={matches ? "caption" : "body1"}>
            Price: {product.price}
          </Typography>
        </ProductMetaWrapper>
      );
}
import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../Styles/Product";



export  const  CategoryMeta= ({ category, matches })=>{
    return (
        <ProductMetaWrapper>
          <Typography variant={ "h5"} lineHeight={2}>
            {category.name}
          </Typography>
          <Typography variant={matches ? "caption" : "body1"}>
            {category.title}
          </Typography>
        </ProductMetaWrapper>
      );
}
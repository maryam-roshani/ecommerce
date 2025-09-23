import React from "react";
import { Breadcrumbs, Typography, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

type Product = {
  category: string;
  title: string;
};

type BreadcrumProps = {
  product: Product;
};

const Breadcrum: React.FC<BreadcrumProps> = ({ product }) => {
  const getCategoryLink = (product: Product) => {
    if (product.category === "women's clothing") {
      return "women";
    } else if (product.category === "men's clothing") {
      return "men";
    } else {
      return product.category;
    }
  };

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ my: 2 }}
    >
      <MuiLink component={Link} to="/" underline="hover" color="inherit">
        HOME
      </MuiLink>
      <MuiLink component={Link} to="/" underline="hover" color="inherit">
        SHOP
      </MuiLink>
      <MuiLink
        component={Link}
        to={`/${getCategoryLink(product)}`}
        underline="hover"
        color="inherit"
      >
        {product.category}
      </MuiLink>
      <Typography color="text.primary">{product.title}</Typography>
    </Breadcrumbs>
  );
};

export default Breadcrum;

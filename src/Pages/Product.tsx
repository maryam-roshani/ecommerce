import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, Paper } from "@mui/material";
import { ShopContext } from "../Context/ShopContext.tsx";
import Breadcrum from "../Components/BreadCrum.tsx";
import ProductDisplay from "../Components/ProductDisplay";

const Product: React.FC = () => {
  const { all_products } = useContext(ShopContext)!;
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {product ? (
        <Box display="flex" flexDirection="column" gap={3}>
          {/* Breadcrumb */}
          <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
            <Breadcrum product={product} />
          </Paper>

          {/* Product Display */}
          <ProductDisplay product={product} />
        </Box>
      ) : (
        <Typography
          variant="h5"
          color="error"
          textAlign="center"
          sx={{ mt: 6 }}
        >
          Product not found.
        </Typography>
      )}
    </Container>
  );
};

export default Product;

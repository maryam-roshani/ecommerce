import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ShopContext } from "../Context/ShopContext";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductProps = {
  product: Product;
};

const ProductDisplay: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useContext(ShopContext)!;

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
      <Box
        sx={{
          width: {
            xs: "100%",   // full width on mobile
            sm: "83.33%", // ~10/12 columns
            md: "66.66%"  // ~8/12 columns
          }
        }}
      >
        <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, p: 2, borderRadius: 3, boxShadow: 4 }}>
          {/* Product Image */}
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: { xs: "100%", md: 300 },
              objectFit: "contain",
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
              p: 2,
            }}
          />

          {/* Product Details */}
          <Box sx={{ flex: 1, ml: { md: 3 }, mt: { xs: 2, md: 0 } }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {product.title}
              </Typography>

              {/* Rating */}
              <Box display="flex" alignItems="center" gap={1}>
                <Rating value={product.rating.rate} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                  ({product.rating.count} reviews)
                </Typography>
              </Box>

              {/* Accordion for Description */}
              <Accordion sx={{ mt: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="medium">Extra Information</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Price */}
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                ${product.price.toFixed(2)}
              </Typography>
            </CardContent>

            {/* Add to Cart Button */}
            <CardActions>
              <Button
                onClick={() => addToCart(product.id)}
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductDisplay;

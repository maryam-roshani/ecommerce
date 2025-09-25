import React, { useState, useEffect } from "react";
import axios from "../axios.ts";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

const PRODUCTS_URL = "http://localhost:8000/products";

const Popular: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get<Product[]>(PRODUCTS_URL);
        setProducts(request.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Box sx={{ mb: 2 }}>
        <hr />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: "50vh" }}>
          <CircularProgress />
        </Box>
      ) : (

        <Box
          display="grid"
          gap={3}
          gridTemplateColumns={{
            xs: "1fr",                 // 1 column on extra-small screens
            sm: "1fr 1fr",             // 2 columns on small screens
            md: "1fr 1fr 1fr",         // 3 columns on medium screens
            lg: "1fr 1fr 1fr 1fr"      // 4 columns on large screens
          }}
        >
          {products.map((item) => (
            <Box key={item.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: "contain", height: 200, p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" noWrap>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/product/${item.id}`}
                    variant="outlined"
                    size="small"
                  >
                    Details
                  </Button>
                  <Button variant="contained" size="small">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Box>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Popular;

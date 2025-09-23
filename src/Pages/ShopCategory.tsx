import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";

type CategoryProps = {
  category: string;
};

const ShopCategory: React.FC<CategoryProps> = ({ category }) => {
  const { all_products } = useContext(ShopContext)!;
  const products = all_products;

  const [sort, setSort] = useState("");

  const handleSort = (value: string) => {
    setSort(value);
  };

  const sortedProducts = [...products].filter(
    (item) => item.category === category
  );

  if (sort === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Category Title */}
      <Typography variant="h4" gutterBottom>
        {category}
      </Typography>

      {/* Sort Dropdown */}
      <Box sx={{ mb: 3, maxWidth: 200 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sort}
            label="Sort By"
            onChange={(e) => handleSort(e.target.value)}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="low-high">Price: Low to High</MenuItem>
            <MenuItem value="high-low">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {sortedProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Item
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              category={item.category}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopCategory;

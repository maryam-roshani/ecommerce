import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
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
          {sortedProducts.map((item) => (
            <Box key={item.id}>
              <Item
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
              />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ShopCategory;

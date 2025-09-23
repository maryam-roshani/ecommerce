import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { ShopContext } from "../Context/ShopContext";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
};

const Item: React.FC<ItemProps> = ({ id, title, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)!;

  const shortTitle = title.length > 15 ? title.substring(0, 15) + "..." : title;

  return (
    <Card sx={{ maxWidth: 280, borderRadius: 3, boxShadow: 3 }}>
      {/* Product Image */}
      <Link to={`/product/${id}`}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "contain", p: 2 }}
        />
      </Link>

      {/* Title + Price */}
      <CardContent>
        <Typography
          variant="subtitle1"
          component="div"
          fontWeight="bold"
          noWrap
        >
          {shortTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          component={Link}
          to={`/product/${id}`}
          size="small"
          variant="outlined"
        >
          Details
        </Button>

        {cartItems[id] === 0 ? (
          <Button
            onClick={() => addToCart(id)}
            variant="contained"
            size="small"
            startIcon={<AddShoppingCartIcon />}
          >
            Add
          </Button>
        ) : cartItems[id] === 1 ? (
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton color="error" onClick={() => removeFromCart(id)}>
              <DeleteIcon />
            </IconButton>
            <Typography>{cartItems[id]}</Typography>
            <IconButton color="primary" onClick={() => addToCart(id)}>
              <AddCircleIcon />
            </IconButton>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton color="warning" onClick={() => removeFromCart(id)}>
              <RemoveCircleIcon />
            </IconButton>
            <Typography>{cartItems[id]}</Typography>
            <IconButton color="primary" onClick={() => addToCart(id)}>
              <AddCircleIcon />
            </IconButton>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default Item;

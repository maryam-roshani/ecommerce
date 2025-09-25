import React, { useContext } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Divider,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { ShopContext } from "../Context/ShopContext";
import { BsDashCircleFill, BsFillPlusCircleFill, BsFillTrashFill } from "react-icons/bs";

const CartItems: React.FC = () => {
  const {
    getTotalCartAmount,
    all_products,
    cartItems,
    removeFromCart,
    addToCart,
    removeCartItem,
  } = useContext(ShopContext)!;
  console.log("Cart total:", getTotalCartAmount());
  console.log(typeof getTotalCartAmount()); 
  return (
    <Box sx={{ p: 3 }}>
      {/* Cart Table */}
      <Paper elevation={3} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {all_products.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.title}
                        sx={{ width: 60, height: 60, objectFit: "contain" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{product.title}</Typography>
                    </TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                        <IconButton onClick={() => removeFromCart(product.id)} color="error">
                          <BsDashCircleFill />
                        </IconButton>
                        <Typography>{cartItems[product.id]}</Typography>
                        <IconButton onClick={() => addToCart(product.id)} color="primary">
                          <BsFillPlusCircleFill />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell>
                      ${(product.price * cartItems[product.id]).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => removeCartItem(product.id)} color="error">
                        <BsFillTrashFill />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              }
              return null;
            })}
          </TableBody>
        </Table>
      </Paper>


      {/* Promo Code */}
      <Box 
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} 
          gap={3}
        >
          {/* Totals */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Cart Totals
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* subtotal */}
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Subtotal</Typography>
              <Typography>$120.00</Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            {/* shipping */}
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            {/* total */}
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">$120.00</Typography>
            </Box>
            <Button variant="contained" fullWidth>
              Proceed to Checkout
            </Button>
          </Paper>

          {/* Promo Code */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="body1" gutterBottom>
              If you have a promo code, enter it here
            </Typography>
            <Box display="flex" gap={1}>
              <TextField placeholder="Promo code" size="small" fullWidth />
              <Button variant="outlined">Submit</Button>
            </Box>
          </Paper>
        </Box>

    </Box>
  );
};

export default CartItems;

import React, { createContext, useState } from "react";
import { all_products } from "../assets/all_products";
import Product from "../Pages/Product";

export const ShopContext = createContext(null);

  const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_products.length; index++ ){
        cart[index] = 0;
    }
    return cart; 
  }


  const ShopContextProvider = (props) => {

      const [cartItems, setCartItems] = useState(getDefaultCart());

      const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }

      const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const removeCartItem = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:0}))

      }

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount.toFixed(2)
      }

      const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            totalItem += cartItems[item];
          }
        }
        return totalItem;
      }

      const rateItem = (itemId) =>{
          console.log()
      }

      const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart, removeCartItem};
      return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      )
  }

export default ShopContextProvider;

import React, { createContext, useState} from "react";
import type { ReactNode } from "react";
import { all_products } from "../assets/all_products";
import Product from "../Pages/Product";

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


type ShopContextType = {
  getTotalCartItems: () => number;
  getTotalCartAmount: () => string;
  all_products: Product[];
  cartItems: { [id: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  removeCartItem: (itemId: number) => void;
  rateItem?: (itemId: number) => void; 

};

export const ShopContext = createContext<ShopContextType | null>(null);

  const getDefaultCart = () =>{
    let cart: { [id: number]: number } = {};
    for (let index = 0; index < all_products.length; index++ ){
        cart[all_products[index].id] = 0;
    }
    return cart; 
  }


    const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

        const [cartItems, setCartItems] = useState<{ [id: number]: number }>(getDefaultCart());

        const addToCart = (itemId: number) => {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        };


        const removeFromCart = (itemId: number) => {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        };

        const removeCartItem = (itemId: number) => {
            setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
        };

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = all_products.find((product) => product.id === Number(item));
                    if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                    }
                }
            }
            return totalAmount.toFixed(2);
        };

        const getTotalCartItems = () => {
            let totalItem = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    totalItem += cartItems[item];
                }
            }
            return totalItem;
        };

        const rateItem = (itemId: number) => {
            console.log(`Rate product with id ${itemId}`);
        };

      const contextValue: ShopContextType = {
        getTotalCartItems,
        getTotalCartAmount,
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
        removeCartItem,
        rateItem,
      };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

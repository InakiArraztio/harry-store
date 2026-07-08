import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const getTotalQuantity = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    removeItem,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    isInCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
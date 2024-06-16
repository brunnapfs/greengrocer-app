import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity };
      setCartItems([...cartItems, newItem]);
    }

    alert(`Produto ${product.title} (${quantity}x) adicionado ao carrinho.`);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

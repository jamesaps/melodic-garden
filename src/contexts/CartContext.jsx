import { createContext, useContext, useState } from 'react';

//Create a context to manage cart state
const CartContext = createContext();

//Create and export a hook which allows for the context to be used
export const useCart = () => {
  return useContext(CartContext);
};

//Create a provider component to manage cart state
export const CartProvider = ({ children }) => {
  //State to store the cart items
  const [cartItems, setCartItems] = useState([]);

  //Function to add an item to the cart
  const addProductToCart = (productId, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => item.productId === productId);
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { productId, quantity }]);
    }
  };

  return (
    // Providing the cart items and add function as the context value
    <CartContext.Provider value={{ cartItems, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
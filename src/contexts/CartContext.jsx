import { createContext, useContext, useState } from "react";

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
    const existingProductIndex = cartItems.findIndex(
      (item) => item.productId === productId,
    );
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { productId, quantity }]);
    }
  };

  // Update product quantity in cart
  const updateProductQuantityInCart = (productId, quantity) => {
    const itemInCart = cartItems.find((item) => item.productId === productId);

    if (itemInCart === undefined) {
      return;
    }

    if (quantity === 0) {
      const updatedCartItems = [...cartItems].filter(
        (item) => item.productId !== productId,
      );

      setCartItems(updatedCartItems);
    } else if (quantity > 0) {
      const updatedCartItems = [...cartItems].map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      );

      setCartItems(updatedCartItems);
    }
  };

  // Get total number of items in cart
  const getNumberOfItemsInCart = () => {
    return cartItems.reduce((total, item) => (total += item.quantity), 0);
  };

  // Get total number of item specified by Id in cart
  const getQuantityOfItemByIdInCart = (productId) => {
    const itemInCart = cartItems.find((item) => item.productId === productId);

    if (itemInCart !== undefined) {
      return itemInCart.quantity;
    }

    return 0;
  };

  return (
    // Providing the cart items and add function as the context value
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        getNumberOfItemsInCart,
        getQuantityOfItemByIdInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

//Create a context to manage cart state
const CartContext = createContext([]);

//Create and export a hook which allows for the context to be used
export const useCart = () => {
  return useContext(CartContext);
};

// Get cart items from local storage
const cartItemsFromLocalStorage = JSON.parse(
  localStorage.getItem("cart") || "[]",
);

//Create a provider component to manage cart state
export const CartProvider = ({ children }) => {
  //State to store the cart items
  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const { products } = useProducts();

  // Store cart to local storage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
      addProductToCart(productId, quantity);

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

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find((product) => {
      return product.Id === cartItem.productId;
    });

    if (product === undefined) {
      return total;
    }

    return total + product.Price * cartItem.quantity;
  }, 0);

  return (
    // Providing the cart items and add function as the context value
    <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        getNumberOfItemsInCart,
        getQuantityOfItemByIdInCart,
        updateProductQuantityInCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

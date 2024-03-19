import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../hooks/useProducts";
import { ProductsProvider } from "../../contexts/ProductsContext";

const Cart = () => {
  const {
    cartItems,
    addProductToCart,
    getQuantityOfItemByIdInCart,
    updateProductQuantityInCart,
  } = useCart();

  const { products } = useProducts();

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
    <div className="container mx-auto mt-28">
      <div className="flex">
        <div className="flex-1">
          {cartItems.map((cartItem, index) => {
            const product = products.find((product) => {
              return product.Id === cartItem.productId;
            });

            if (product === undefined) {
              return;
            }

            return (
              <div key={index} className="flex items-center border-b py-2">
                <img
                  src={product.Image}
                  alt={product.Name}
                  className="mr-4 h-16 w-16"
                />
                <div>
                  <h3 className="font-bold">{product.Name}</h3>
                  <p>Size: {product.Size}</p>
                  <p>Quantity: {cartItem.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1">
          <p>£{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

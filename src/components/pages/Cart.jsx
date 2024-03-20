import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../hooks/useProducts";
import { ProductsProvider } from "../../contexts/ProductsContext";

const Cart = () => {
  const { cartItems, updateProductQuantityInCart, getNumberOfItemsInCart } =
    useCart();

  const { products } = useProducts();


  const numberOfItemsInCart = getNumberOfItemsInCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find((product) => {
      return product.Id === cartItem.productId;
    });

    if (product === undefined) {
      return total;
    }

    return total + product.Price * cartItem.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="m-16 flex flex-1 items-center justify-center">
        <p className="">Your cart is empty.</p>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto mb-16 mt-28">
        <div className="text-end">Price</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {cartItems.map((cartItem, index) => {
              const product = products.find((product) => {
                return product.Id === cartItem.productId;
              });

              if (product === undefined) {
                return;
              }

              return (
                <div
                  key={index}
                  className="flex  items-center justify-between border-b py-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={product.Image}
                      alt={product.Name}
                      className=" h-24 w-24 rounded-3xl border object-cover object-top"
                    />

                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <h3 className="font-bold">{product.Name}</h3>
                        <p>Size: {product.Size}</p>
                      </div>

                      <p>Quantity: {cartItem.quantity}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p>£{product.Price.toFixed(2)}</p>
                    <p
                      className="cursor-pointer text-xs text-pink-600"
                      onClick={() => {
                        updateProductQuantityInCart(product.Id, 0);
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <p>
              Subtotal{" "}
              {`(${numberOfItemsInCart} item${numberOfItemsInCart !== 1 ? "s" : ""}):`}{" "}
              <span className="text-3xl font-bold">
                £{totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;

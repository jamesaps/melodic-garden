import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../hooks/useProducts";
import { ProductsProvider } from "../../contexts/ProductsContext";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    updateProductQuantityInCart,
    getNumberOfItemsInCart,
    totalPrice,
  } = useCart();

  const { products } = useProducts();

  const numberOfItemsInCart = getNumberOfItemsInCart();

  if (cartItems.length === 0) {
    return (
      <div className="m-16 flex flex-1 items-center justify-center">
        <p className="text-gray-800">Your cart is empty.</p>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto mb-16 max-w-6xl max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 mt-32 text-center text-xl font-bold text-gray-900">
          CART
        </h1>

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
                  className="flex flex-col items-center justify-between border-b py-4 sm:flex-row"
                >
                  <div className="flex gap-4">
                    <NavLink to={`/products/${product.Id}`}>
                      <img
                        src={product.Image}
                        alt={product.Name}
                        className=" h-24 w-24 rounded-3xl border object-cover object-top"
                      />
                    </NavLink>

                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col">
                        <h3 className="font-bold">{product.Name}</h3>
                        <p>Size: {product.Size}</p>
                      </div>

                      <p>Quantity: {cartItem.quantity}</p>

                      <p className="block sm:hidden">
                        £{product.Price.toFixed(2)}
                      </p>

                      <p
                        className="block cursor-pointer text-xs text-pink-600 sm:hidden"
                        onClick={() => {
                          updateProductQuantityInCart(product.Id, 0);
                        }}
                      >
                        Remove
                      </p>
                    </div>
                  </div>

                  <div className="hidden flex-col items-end sm:flex">
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
          <div className="flex flex-col justify-between sm:flex-row">
            <Link
              to="/checkout"
              className="font-large my-4 cursor-pointer rounded-lg bg-lime-600 px-5 py-3 text-center text-xl font-bold text-white hover:bg-lime-700 sm:my-0"
            >
              Go to checkout
            </Link>
            <p className="">
              {`Subtotal (${numberOfItemsInCart} item${numberOfItemsInCart !== 1 ? "s" : ""}):`}{" "}
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

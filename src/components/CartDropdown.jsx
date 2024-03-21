import { useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { useCartDropdown } from "../contexts/CartDropdownContext";

const CartDropdown = ({ checkoutIcon }) => {
  const { cartItems, updateProductQuantityInCart, totalPrice } = useCart();
  const { products } = useProducts();
  const { isOpen, closeDropdown, dropdownRef, trigger } = useCartDropdown();
  const timeoutRef = useRef(null);

  const getProductById = (productId) => {
    return products.find((product) => product.Id === productId);
  };

  const removeFromCart = (productId) => {
    updateProductQuantityInCart(productId, 0);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        checkoutIcon.current &&
        !checkoutIcon.current.contains(event.target)
      ) {
        closeDropdown();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDropdown, dropdownRef]);

  useEffect(() => {
    if (isOpen && trigger !== "addtocart") {
      return;
    }

    if (isOpen && cartItems.length === 0 && trigger === "addtocart") {
      closeDropdown();
    }

    if (isOpen && trigger === "addtocart") {
      timeoutRef.current = setTimeout(() => {
        closeDropdown();
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen, trigger, closeDropdown, cartItems]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (isOpen && trigger === "addtocart") {
      timeoutRef.current = setTimeout(() => {
        closeDropdown();
      }, 500);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute ${isOpen ? "block" : "hidden"} right-0 top-full mt-2 w-72 rounded-lg border border-gray-200 bg-white shadow-lg`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
      </div>
      <div className="max-h-60 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-900">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.productId}
              className="mb-4 flex items-center justify-between"
            >
              <Link
                to={`/products/${item.productId}`}
                className="flex items-center space-x-4"
              >
                {getProductById(item.productId) && (
                  <>
                    <img
                      src={getProductById(item.productId).Image}
                      alt={getProductById(item.productId).Name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {getProductById(item.productId).Name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Price: £
                        {getProductById(item.productId).Price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </>
                )}
              </Link>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-600 hover:text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-gray-200 p-4">
        <p className="text-sm text-gray-500">
          Total Price: £{totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between py-3">
        <Link
          to="/cart"
          onClick={closeDropdown}
          className="ml-4 rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        >
          Go to Cart
        </Link>
        <Link
          to="/checkout" 
          onClick={closeDropdown}
          className="mr-4 rounded-md bg-lime-600 px-4 py-2 text-white hover:bg-lime-700"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;

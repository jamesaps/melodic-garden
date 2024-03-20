import { useEffect, useRef } from 'react';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { useCartDropdown } from '../contexts/CartDropdownContext';

const CartDropdown = () => {
  const { cartItems, updateProductQuantityInCart } = useCart();
  const { products } = useProducts();
  const { isOpen, closeDropdown, dropdownRef } = useCartDropdown();
  const timeoutRef = useRef(null);

  const getProductById = (productId) => {
    return products.find((product) => product.Id === productId);
  };

  const removeFromCart = (productId) => {
    updateProductQuantityInCart(productId, 0);
  };

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        closeDropdown();
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen, closeDropdown]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (isOpen) {
        timeoutRef.current = setTimeout(() => {
          closeDropdown();
        }, 1500);
      }
  };


  return (
    <div
      ref={dropdownRef}
      className={`absolute ${isOpen ? 'block' : 'hidden'} top-full right-0 w-72 bg-white border border-gray-200 shadow-lg rounded-lg mt-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
      </div>
      <div className="p-4 max-h-60 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.productId} className="flex items-center space-x-4 mb-4">
            {getProductById(item.productId) && (
              <img src={getProductById(item.productId).Image} alt={getProductById(item.productId).Name} className="w-12 h-12 rounded-full" />
            )}
            <div>
              <p className="text-sm font-medium">
                {getProductById(item.productId) ? getProductById(item.productId).Name : 'Product Name Not Available'}
              </p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.productId)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Total Price: {cartItems.reduce((total, item) => total + (getProductById(item.productId).Price * item.quantity), 0).toFixed(2)}</p>
      </div>
      <div className="flex mt-4">
        <Link to="/cart" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Go to Cart</Link>
        <Link to="/checkout" className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700">Checkout</Link>
      </div>
    </div>
  );
};

export default CartDropdown;

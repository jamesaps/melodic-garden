import { useEffect, useState } from 'react';
import plants from '../plants.json'; 

const CartComponent = ({ cartItems }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Retrieve product information based on product IDs in cartItems
      const updatedProducts = cartItems.map(cartItem => {
        const product = plants.find(product => product.Id === cartItem.productId);
        return { ...cartItem, ...product };
      });
      setProducts(updatedProducts);
    }, [cartItems]);
  
    return (
      <div className="absolute top-full right-0 w-72 bg-white border border-gray-200 shadow-lg rounded-lg mt-2">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
        </div>
        <div className="p-4 max-h-60 overflow-y-auto">
          {products.map(item => (
            <div key={item.productId} className="flex items-center space-x-4 mb-4">
              {item.Image && <img src={item.Image} alt={item.Name} className="w-12 h-12 rounded-full" />}
              <div>
                <p className="text-sm font-medium">{item.Name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-500">Total: {item.quantity * item.Price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Total Price: {products.reduce((total, item) => total + (item.quantity * item.Price), 0)}</p>
        </div>
      </div>
    );
  };
  
  export default CartComponent;
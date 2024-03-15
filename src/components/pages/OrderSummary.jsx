import React, { useState, useEffect }  from 'react';

const OrderSummary = () => {
    const [products, setProducts] = useState([]);
        useEffect(() => {
    
    const fetchProducts = async () => {
        try {
            const response = await fetch('all-products');
            const data = await response.json();

            setProducts(data.products);
        } catch (error) {
          console.error('Unable to fetch products:', error);
        }
      };
      fetchProducts();
    }, []);

    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

    return (
        <div className="container mx-auto">
        <div className="flex">
          <div className="flex-1">
            {products.map((product, index) => (
              <div key={index} className="flex items-center border-b py-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p>Size: {product.size}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <p>£{totalPrice.toFixed(2)}</p>
          </div>
        </div>
        </div>
      );
    };
    
    export default OrderSummary;
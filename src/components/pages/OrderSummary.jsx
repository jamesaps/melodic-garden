import React from 'react';

const OrderSummary = ({ products }) => {
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
            <p>Total Price: £{totalPrice.toFixed(2)}</p>
          </div>
        </div>
        </div>
      );
    };
    
    export default OrderSummary;
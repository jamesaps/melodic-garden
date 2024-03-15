import React from 'react';

const OrderTotal = ({ products }) => {
    const subTotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const shipping = 10; 
    const vat = 0.20;

    const OrderTotal = subTotal + shipping + (subTotal * vat);
    
    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex justify-between mt-4">
                    <p>Subtotal:</p>
                    <p>£{subTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping:</p>
                    <p>£{shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>VAT (20%):</p>
                    <p>£{(subTotal * vat).toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold">
                    <p>Total Cost:</p>
                    <p>£{totalCost.toFixed(2)}</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Checkout</button>
            </div>
        </div>
    );
};

export default OrderTotal;
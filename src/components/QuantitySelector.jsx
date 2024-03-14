import { useState } from 'react';

const QuantitySelector = ({ initialValue, maxValue, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialValue);

    const handleIncrement = () => {
        if (quantity < maxValue) {
            setQuantity(quantity + 1);
            if (onQuantityChange) {
                onQuantityChange(quantity + 1);
            }
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            if (onQuantityChange) {
                onQuantityChange(quantity - 1);
            }
        }
    };

    return (
        <div className="flex items-center">
            <button className="bg-white border border-lime-900 text-gray-600 px-3 py-1 mr-1" onClick={handleDecrement}>
                -
            </button>
            <span className="px-8 py-1 bg-white border border-lime-900">{quantity}</span>
            <button className={`bg-white border border-lime-900 text-gray-600 px-3 py-1 ml-1 ${quantity === maxValue ? 'cursor-not-allowed opacity-50' : ''}`} onClick={handleIncrement} disabled={quantity === maxValue}>
                +
            </button>
        </div>
    );
};

export default QuantitySelector;




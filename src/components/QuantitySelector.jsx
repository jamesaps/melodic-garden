import { useState, useEffect } from "react";

const QuantitySelector = ({
  initialValue,
  // maxValue,
  // minValue,
  quantityInStock,
  quantityInCart,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const minValue = quantityInStock > quantityInCart ? 1 : 0;
  const maxValue =
    quantityInStock > quantityInCart ? quantityInStock - quantityInCart : 0;

  useEffect(() => {
    if (quantity > maxValue) {
      setQuantity(maxValue);
    } else if (quantity < minValue) {
      setQuantity(minValue);
    }

    onQuantityChange(quantity);
  }, [maxValue, minValue, quantity, onQuantityChange]);

  const handleIncrement = () => {
    if (quantity < maxValue) {
      setQuantity(quantity + 1);
      if (onQuantityChange) {
        onQuantityChange(quantity + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
      if (onQuantityChange) {
        onQuantityChange(quantity - 1);
      }
    } else {
      setQuantity(minValue);
      if (onQuantityChange) {
        onQuantityChange(minValue);
      }
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`mr-1 border border-lime-900 bg-white px-3 py-1 text-gray-600 ${quantity === minValue ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={handleDecrement}
      >
        -
      </button>
      <span
        className={`border border-lime-900 bg-white px-8 py-1 ${quantity === 0 ? "cursor-not-allowed opacity-50" : ""}`}
      >
        {quantity === 0 ? "-" : quantity}
      </span>
      <button
        className={`ml-1 border border-lime-900 bg-white px-3 py-1 text-gray-600 ${quantity === maxValue ? "cursor-not-allowed opacity-50" : ""}`}
        onClick={handleIncrement}
        disabled={quantity === maxValue}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

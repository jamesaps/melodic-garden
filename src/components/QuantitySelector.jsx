import { useState, useEffect } from "react";

const QuantitySelector = ({
  initialValue,
  maxValue,
  minValue,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  useEffect(() => {
    setQuantity(initialValue);
  }, [initialValue]);

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
        className="mr-1 border border-lime-900 bg-white px-3 py-1 text-gray-600"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="border border-lime-900 bg-white px-8 py-1">
        {quantity}
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

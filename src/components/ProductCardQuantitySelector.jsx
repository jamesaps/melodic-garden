import { useState, useEffect } from "react";

const ProductCardQuantitySelector = ({
  initialValue,
  quantityInStock,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const minValue = 0;
  const maxValue = quantityInStock;

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
    <div className="flex h-6 items-center justify-around gap-3 rounded-full border border-gray-600 px-2 py-2">
      <button
        onClick={handleDecrement}
        className={`stroke-gray-600 ${quantity === minValue ? "cursor-not-allowed opacity-50" : null}`}
        disabled={quantity === minValue}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`h-4 w-4`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <span
        className={`flex-1 px-8 py-1 text-center ${quantity === 0 ? "cursor-not-allowed opacity-50" : null}`}
      >
        {quantity === 0 ? "-" : quantity}
      </span>

      <button
        onClick={handleIncrement}
        className={`stroke-gray-600 ${quantity === maxValue ? "cursor-not-allowed opacity-50" : null}`}
        disabled={quantity === maxValue}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCardQuantitySelector;

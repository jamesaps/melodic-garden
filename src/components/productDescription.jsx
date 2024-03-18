import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../contexts/CartContext";

const ProductDescription = ({ mainProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    console.log(
      `Added ${quantity} ${mainProduct.Name}(s) with ID ${mainProduct.Id} to cart.`,
    );
    addProductToCart(mainProduct.Id, quantity);
    setQuantity(1);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex w-full flex-col items-center justify-center md:w-5/6 md:flex-row lg:w-4/5 xl:w-3/4">
          <div className="md:pr-8">
            <img
              src={mainProduct.Image}
              alt={mainProduct.Name}
              className="h-auto w-full object-cover sm:aspect-[1/1] md:aspect-[5/6] md:rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start">
            <h2 className="text-left font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
              {mainProduct.Name}
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <svg
                className="mr-2 h-5 w-5 fill-current text-lime-600"
                viewBox="0 0 24 24"
              >
                <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              <p className="text-base font-medium text-lime-600 md:text-xl">
                {mainProduct.Price}
              </p>
            </div>
            <h3 className="mt-4 text-center font-bold text-gray-900 md:text-left">
              Description
            </h3>
            <p className="mt-2 text-center text-gray-700 md:text-left">
              {mainProduct.Description}
            </p>
            <div className="mt-4 flex items-center">
              <QuantitySelector
                initialValue={quantity}
                maxValue={mainProduct.Stock}
                minValue={1}
                onQuantityChange={handleQuantityChange}
              />
              <button
                onClick={addToCart}
                className="ml-3 rounded bg-lime-600 px-4 py-2 font-bold text-white hover:bg-lime-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl ">
          Other {mainProduct.Size} Plants
        </h2>
      </div>
    </>
  );
};

export default ProductDescription;

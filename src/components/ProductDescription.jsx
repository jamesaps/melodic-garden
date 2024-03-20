import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../contexts/CartContext";
import { useCartDropdown } from "../contexts/CartDropdownContext";

const ProductDescription = ({ mainProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    getQuantityOfItemByIdInCart,
    updateProductQuantityInCart,
  } = useCart();

  const { openDropdown } = useCartDropdown();


  
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };


  const addToCart = () => {
    console.log(
      `Added ${quantity} ${mainProduct.Name}(s) with ID ${mainProduct.Id} to cart.`,
    );
    addProductToCart(mainProduct.Id, quantity);
    openDropdown('addtocart');
  };

  const removeFromCart = () => {
    updateProductQuantityInCart(mainProduct.Id, 0);
  };

  const stock = mainProduct.Stock;
  const quantityInCart = getQuantityOfItemByIdInCart(mainProduct.Id);
  const quantityLeftInStock = stock - quantityInCart;


  return (
    <>
      <div className="mx-0 flex justify-center bg-white sm:mx-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src={mainProduct.Image}
              alt={mainProduct.Name}
              className="w-full sm:rounded-3xl"
            />
          </div>
          <div className="col-span-1 mx-8 flex flex-col items-center justify-start md:col-span-2 md:items-start lg:col-span-2">
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
                £{mainProduct.Price && mainProduct.Price.toFixed(2)}
              </p>
            </div>
            <h3 className="mt-4 text-center font-bold text-gray-900 md:text-left">
              Description
            </h3>
            <p className="mt-2 text-center text-gray-700 md:text-left">
              {mainProduct.Description}
            </p>
            <div className="mt-4 flex flex-row justify-start gap-3 md:flex-col lg:flex-row lg:justify-start">
              <QuantitySelector
                initialValue={quantity}
                quantityInStock={stock}
                quantityInCart={quantityInCart}
                // maxValue={mainProduct.Stock}
                // minValue={1}
                onQuantityChange={handleQuantityChange}
              />

              <button
                onClick={addToCart}
                className="ml-3 rounded bg-lime-600 px-4 py-2 font-bold text-white hover:bg-lime-700"
              >
                Add to Cart
              </button>
            </div>
            {quantityLeftInStock === 0 ? (
              <span className="mt-3">No more left in stock</span>
            ) : quantityLeftInStock < 10 ? (
              <span className="mt-3">
                Only {quantityLeftInStock} left in stock
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
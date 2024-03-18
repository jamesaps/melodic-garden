// import React from 'react';

import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../hooks/useProducts";
import ProductCardQuantitySelector from "./ProductCardQuantitySelector";

function ProductCard({ product }) {
  const { getQuantityOfItemByIdInCart, updateProductQuantityInCart } =
    useCart();

  const stock = product.Stock;
  const quantityInCart = getQuantityOfItemByIdInCart(product.Id);
  const quantityLeftInStock = stock - quantityInCart;

  const handleQuantityChange = (quantity) => {
    console.log(`productId: ${product.Id}, ${quantity}`);

    updateProductQuantityInCart(product.Id, quantity);
  };

  return (
    <div className="lg:col-span-1">
      <NavLink to={`/products/${product.Id}`}>
        <img
          className="mb-4 h-72 w-full rounded-3xl object-cover object-center lg:object-top"
          src={product.Image}
          alt=""
        />
      </NavLink>

      <div className="my-4 flex items-center justify-between">
        <span className="text-xl">{product.Name}</span>
        <span className="text-3xl font-bold">£{product.Price.toFixed(2)}</span>
      </div>

      <ProductCardQuantitySelector
        initialValue={quantityInCart}
        quantityInStock={stock}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
}

export default ProductCard;

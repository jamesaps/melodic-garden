// import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="rounded-lg bg-white lg:col-span-1">
      <img
        className="mb-4 h-72 w-full rounded-3xl object-cover object-center lg:object-top"
        src={product.Image}
        alt=""
      />

      <div className="mt-8 flex items-center justify-between">
        <span className="text-xl">{product.Name}</span>
        <span className="text-3xl font-bold">£{product.Price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ProductCard;

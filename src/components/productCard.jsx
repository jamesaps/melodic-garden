// import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white rounded-lg p-4">
      <a href="#">
        <img className="rounded-3xl mb-4 w-full h-auto" src={product.Image} alt={product.Name} />
        <div className="flex items-center justify-between mt-8">
          <span className="text-md md:text-xl lg:text-2xl text-gray-900 dark:text-white ml-7 mb-5 mr-2">{product.Name}</span>
          <span className="text-md md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mr-7 mb-5">{product.Price}</span>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
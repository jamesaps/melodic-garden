// import React from 'react';
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
// import products from '../plants-archived.json';

function HomePlantSection() {
  const { products } = useProducts();

  const getRandomProducts = (arr, n) => {
    console.log(arr);

    const random = arr.sort(() => 0.5 - Math.random());
    return random.slice(0, n);
  };

  const randomProducts = getRandomProducts(products, 6);

  return (
    <div className="container mx-auto grid grid-cols-2 grid-rows-2 gap-8 pb-12 pt-12 sm:grid-cols-2 md:grid-cols-4">
      <div className="col-span-1 row-span-2 flex items-center justify-center md:col-span-1 lg:col-span-1">
        <FeatureCard />
      </div>
      {randomProducts.map((product) => (
        <div key={product.Id} className="col-span-1">
          <div className="flex items-center justify-center">
            <div className="w-full h-full">
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePlantSection;

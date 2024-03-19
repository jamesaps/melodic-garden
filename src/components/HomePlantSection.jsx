// import React from 'react';
import { useProducts } from "../hooks/useProducts";
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";
// import products from '../plants-archived.json';

function HomePlantSection() {
  const { products } = useProducts();

  const getRandomProducts = (arr, n) => {
    const random = arr.sort(() => 0.5 - Math.random());
    return random.slice(0, n);
  };

  const randomProducts = getRandomProducts(products, 6);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 pb-12 pt-12 sm:grid-cols-2 md:grid-cols-4">
      <div className="col-span-1 row-span-2 flex items-center justify-center md:col-span-1 lg:col-span-1">
        <FeatureCard />
      </div>
      {randomProducts.map((product) => (
        <div key={product.Id} className="col-span-1">
          <div className="flex items-center justify-center">
            <div style={{ width: "75%", height: "75%" }}>
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePlantSection;


// import React from 'react';
import FeatureCard from "./FeatureCard";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

function HomePlantSection() {
    const { products } = useProducts();
    const getRandomProducts = (arr, n) => {
        const random = arr.sort(() => 0.5 - Math.random());
        return random.slice(0, n);
    };

    const randomProducts = getRandomProducts(products, 6);

    return (
        <div className="container mx-auto gap-4 grid grid-cols-1 md:grid-cols-4 pt-12 pb-12 px-4 md:px-0">
            <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 flex justify-center items-center">
                <FeatureCard />
            </div>
            {randomProducts.map((product) => (
                <div key={product.Id} className="col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="flex justify-center items-center">
                        <div style={{ width: '100%', height: '100%' }}>
                            <ProductCard product={product} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomePlantSection;
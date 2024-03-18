import { useEffect, useState } from "react";
import { ProductsContext, useProducts } from "../hooks/useProducts";

//Create a provider component to manage products state
export const ProductsProvider = ({ children }) => {
  //State to store the products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function getProducts() {
      const plantsData = await fetchPlants();

      if (!ignore) {
        setProducts(plantsData);
      }
    }

    getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch("/plants.json");
      if (!response.ok) {
        throw new Error("Failed to fetch plants");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    // Providing the cart items and add function as the context value
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

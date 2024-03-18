import { createContext, useContext } from "react";

//Create a context to manage products state
export const ProductsContext = createContext([]);

//Create and export a hook which allows for the context to be used
export const useProducts = () => {
  return useContext(ProductsContext);
};

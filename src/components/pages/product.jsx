import { useParams } from "react-router-dom";
import ProductDescription from "../ProductDescription";
import RecommendedProducts from "../RecommendedProducts";
import { useProducts } from "../../hooks/useProducts";

const Product = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const mainProduct = products.find((plant) => plant.Id === parseInt(id)) || {};
  const otherPlants = products
    .filter(
      (plant) => plant.Size === mainProduct.Size && plant.Id !== parseInt(id),
    )

  return (
    <>
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts otherPlants={otherPlants} />
    </>
  );
};

export default Product;

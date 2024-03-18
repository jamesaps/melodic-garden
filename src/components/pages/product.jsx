import { useParams } from "react-router-dom";
import ProductDescription from "../ProductDescription";
import RecommendedProducts from "../RecommendedProducts";
import { useProducts } from "../../hooks/useProducts";

export default function Product() {
  const { id } = useParams();
  const { products } = useProducts();

  const mainProduct = products.find((plant) => plant.Id === parseInt(id)) || {};
  const otherPlants = products
    .filter(
      (plant) => plant.Size === mainProduct.Size && plant.Id !== parseInt(id),
    )
    .slice(0, 3);

  return (
    <>
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts otherPlants={otherPlants} />
    </>
  );
}

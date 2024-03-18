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
    .slice(0, 3);

  return (
    <div className="mt-0 flex max-w-6xl flex-col gap-4 lg:gap-12 md:mt-48 mb-12">
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts
        mainProduct={mainProduct}
        otherPlants={otherPlants}
      />
    </div>
  );
};

export default Product;

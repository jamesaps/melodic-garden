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
      <div className="mb-12 mt-0 flex max-w-6xl flex-col gap-4 sm:mt-24 md:mt-48 md:gap-8 lg:gap-12">
        <ProductDescription mainProduct={mainProduct} />
        <RecommendedProducts
          mainProduct={mainProduct}
          otherPlants={otherPlants}
        />
      </div>
    );
  };
  
export default Product;
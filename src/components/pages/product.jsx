import { useParams } from 'react-router-dom';
import ProductDescription from '../ProductDescription';
import RecommendedProducts from '../RecommendedProducts';
import plants from '../../plants.json';

const Product = () => {
  const { id } = useParams(); // Get the ID parameter from the URL
  const mainProduct = plants.find(plant => plant.Id === parseInt(id)); // Find the selected product by ID
  const otherPlants = plants.filter(plant => plant.Size === mainProduct.Size && plant.Id !== parseInt(id)).slice(0, 3); // Filter other products by size, excluding the main product
  
  return (
    <>
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts otherPlants={otherPlants} />
    </>
  );
};

export default Product;

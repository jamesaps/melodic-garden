import { useParams } from 'react-router-dom';
import ProductDescription from '../ProductDescription';
import RecommendedProducts from '../RecommendedProducts';
import plants from '../../plants.json';

const Product = () => {
  const { id } = useParams(); 
  const mainProduct = plants.find(plant => plant.Id === parseInt(id));
  const otherPlants = plants.filter(plant => plant.Size === mainProduct.Size && plant.Id !== parseInt(id)).slice(0, 3); 
  
  return (
    <>
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts otherPlants={otherPlants} />
    </>
  );
};

export default Product;
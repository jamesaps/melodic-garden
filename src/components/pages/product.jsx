import { useParams } from 'react-router-dom';
import ProductDescription from '../productDescription';
import RecommendedProducts from '../RecommendedProducts';
import plants from '../../plants.json';

const Product = () => {
  const { id } = useParams(); 
  const mainProduct = plants.find(plant => plant.Id === parseInt(id));
  console.log(`mainProduct: ${mainProduct.Size}`)
  const otherPlants = plants.filter(plant => plant.Size === mainProduct.Size && plant.Id !== parseInt(id)); 
  console.log(`otherproducts size:`)
  otherPlants.forEach(otherPlant => {
    console.log(`otherplantid: ${otherPlant.Id} Size: ${otherPlant.Size}`);
  });
  
  
  return (
    <>
      <ProductDescription mainProduct={mainProduct} />
      <RecommendedProducts otherPlants={otherPlants} />
    </>
  );
};

export default Product;
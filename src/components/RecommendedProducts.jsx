import { Link } from 'react-router-dom';

const RecommendedProducts = ({ otherPlants }) => {
  return (
    <>
      <div className="flex justify-center space-x-4 mt-10">
        {otherPlants.slice(0, 3).map(plant => (
          <Link to={`/product/${plant.Id}`} key={plant.Id}>
            <img src={plant.Image} alt={plant.Name} className="w-40 h-40 rounded-3xl" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecommendedProducts;
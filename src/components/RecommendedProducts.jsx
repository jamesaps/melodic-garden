import { Link } from "react-router-dom";

const RecommendedProducts = ({ mainProduct, otherPlants }) => {
  return (
    <div>
      <h2 className="mb-4 text-center font-bold text-gray-800 sm:text-2xl md:text-3xl lg:mb-12 lg:text-4xl">
        Other {mainProduct.Size} Plants
      </h2>

      <div className="flex justify-center space-x-4">
        {otherPlants.slice(0, 3).map((plant) => (
          <Link to={`/products/${plant.Id}`} key={plant.Id}>
            <img
              src={plant.Image}
              alt={plant.Name}
              className="bg-product-card-background h-40 w-40 rounded-3xl object-cover object-center "
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;

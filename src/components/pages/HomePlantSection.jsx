import FeatureCard from "../FeatureCard";
import ProductCard from "../productCard";

function HomePlantSection() {
    return (  
        <div className="md:container md:mx-auto gap-4 grid grid-cols-4 grid-rows-2 mt-12 mb-20">
        <div className="row-span-2 flex justify-center items-center">
        <FeatureCard />
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div style={{ width: '75%', height: '75%' }}>
          <ProductCard />
        </div>
      </div>
      </div>
    );
  }

export default HomePlantSection;
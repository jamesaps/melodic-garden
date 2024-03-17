import FeatureCard from "./FeatureCard";
import ProductCard from "./productCard";

function HomePlantSection() {
    return (  
        <div className="container mx-auto gap-4 grid grid-cols-2 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 pt-12 pb-12">
            <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 flex justify-center items-center">
                <FeatureCard />
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex justify-center items-center">
                    <div style={{ width: '75%', height: '75%' }}>
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePlantSection;
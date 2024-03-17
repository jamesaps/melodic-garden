import FeatureCard from "../FeatureCard";
import ProductCard from "../productCard";

export default function Categories() {
  return (
    <>
  <div className="md:container md:mx-auto gap-4 grid grid-cols-4 grid-rows-2">
  <div className="row-span-2 flex justify-center items-center">
        <FeatureCard />
      </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%'  }}> <ProductCard/> </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%' }}> <ProductCard/> </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%' }}> <ProductCard/> </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%' }}> <ProductCard/> </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%' }}> <ProductCard/> </div>
      <div style={{ gridColumn: 'span 1', gridRow: 'span 1', width: '80%', height: '80%' }}> <ProductCard/> </div>
    </div>
</>)
}



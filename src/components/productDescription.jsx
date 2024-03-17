import { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import products from '../plants.json';

   
    function ProductDescription({ updateCart }) {
        const [quantity, setQuantity] = useState(0);
        const [stock, setStock] = useState(products[6].Stock);
    
        const handleQuantityChange = (newQuantity) => {
            setQuantity(newQuantity);
        };
    
        const addToCart = () => {
            console.log(`Added ${quantity} ${products[1].Name} to cart.`);
            setStock(stock - quantity);
            setQuantity(1);
            // Call the updateCart function to update the cart count
            updateCart(quantity);
        };

    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-white'>
                <div className='w-full md:w-5/6 lg:w-4/5 xl:w-3/4 flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:pr-8'>
                        <img src={products[1].Image} alt={products[1].Name} className='w-full h-auto object-cover md:rounded-3xl md:aspect-[5/6] sm:aspect-[1/1]' />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-left">{products[1].Name}</h2>
                        <div className="flex items-center justify-center md:justify-start">
                            <svg className="h-5 w-5 text-lime-600 fill-current mr-2" viewBox="0 0 24 24">
                                <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                            <p className="text-base md:text-xl font-medium text-lime-600">{products[1].Price}</p>
                        </div>
                        <h3 className="text-gray-900 mt-4 font-bold text-center md:text-left">Description</h3>
                        <p className="text-gray-700 mt-2 text-center md:text-left">{products[1].Description}</p>
                        <div className="flex items-center mt-4">
                            <QuantitySelector initialValue={quantity} maxValue={products[1].Stock} minValue={1} onQuantityChange={handleQuantityChange} />
                            <button onClick={addToCart} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded ml-3">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDescription;

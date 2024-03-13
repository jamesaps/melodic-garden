import { useState } from 'react'
import products from '../plants.json'

function ProductDescription(){

    //functionality

    //on-page
    return (
    <>
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-full md:w-5/6 lg:w-4/5 xl:w-3/4'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
    
                    {/* Product Image */}
                    <div className='flex justify-center items-center md:col-span-1 md:pr-10'>
                        <img src={products[6].Image} alt={products[6].Name} className='w-full h-auto object-cover rounded-3xl aspect-[8/9]'></img>
                    </div>
    
                    {/* Product Text */}
                    <div className="flex flex-col justify-center md:col-span-1 md:pl-10">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left">{products[6].Name}</h1>
                        <div className="mt-4 flex items-center text-left">
                            <svg className="h-5 w-5 text-white mr-1 fill-lime-600 mr-2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg>
                            <p className="text-xl font-medium text-lime-600">{products[6].Price}</p>
                        </div>
                        <div className="mt-7 text-left">
                            <h2 className="text-lg text-gray-900 font-bold">Description</h2>
                            <p className="text-base text-gray-700 mt-4">{products[6].Description}</p>
                        </div>
                        
                        <div className="mt-7 text-left">
                            <button className="bg-lime-900 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductDescription
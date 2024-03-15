import React from 'react';
import plant1 from "../assets/plant1.png"
import plant2 from "../assets/plant2.png"
import plant3 from "../assets/plant3.png"

const Jumbotron = () => {
  return (

    <div className="top-0 left-0 w-full h-full ">
    
    <div className="flex items-stretch h-full">

      <div className="w-1/3 hidden md:flex ">
        <img src={plant1} alt="Image 1" className="w-full h-full" />
      </div>

      <div className="w-1/3 hidden md:flex">
        <img src={plant2} alt="Image 2" className="w-full h-full" /> 
      </div>

      <div className="md:w-1/3 bg-green-900 p-6 flex flex-col justify-between " >
      <div className="mb-6 ">
        <img src={plant3} alt="Image3" className="w-md rounded-lg " />
        </div>
        <div className="z-10 mb-4 text-white">
          <h2 className="text-2xl font-bold mb-4 text-left">A Botanial Haven</h2>
          <p className="text-sm mb-6 text-left">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space.</p>
          <button className=" w-full bg-white text-green-950 text-m py-2 px-4 rounded-full drop-shadow-lg hover:bg-emerald-600 hover:text-white ">View all House Plants</button>
        </div>
      </div>
    </div>
    </div>

    
  ); 
};

export default Jumbotron;
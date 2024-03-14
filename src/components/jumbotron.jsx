import React from 'react';
import plant1 from "../assets/plant1.png"
import plant2 from "../assets/plant2.png"
import plant3 from "../assets/plant3.png"

const Jumbotron = () => {
  return (
    <div className="absolute top-0 left-0 w-full text-white p-8">
    <div className="flex justify-between items-center">

      <div className="w-1/3">
        <img src={plant1} alt="Image 1" className="w-full h-96" />
      </div>

      <div className="w-1/3">
        <img src={plant2} alt="Image 2" className="w-full h-96" />
      </div>

      <div className="w-1/3 bg-green-900 text-white p-8 h-96 " >
      <div className="w-full h-48">
        <img src={plant3} alt="Image3" className="relative inset-0 w-full h-48 object-cover rounded-lg mb-8 " />
        </div>
        <div className="z-10">
          <h2 className="text-2xl font-bold mb-4 flex justify-start">A Botanial Haven</h2>
          <p className="text-sm mb-4 text-left">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space.</p>
          <button className=" w-full bg-white hover:bg-blue-600 text-green-950 text-sm shadow-2xl py-2 px-4 rounded-full">View all House Plants</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jumbotron;
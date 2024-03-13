import React from 'react';
import plant1 from "../assets/plant1.png"
import plant2 from "../assets/plant2.png"
import plant3 from "../assets/plant3.png"

const Jumbotron = () => {
  return (
    <div className="flex justify-between items-center">

      <div className="w-1/3">
        <img src={plant1} alt="Image 1" className="w-full" />
      </div>

      <div className="w-1/3">
        <img src={plant2} alt="Image 2" className="w-full" />
      </div>

      <div className="w-1/3 bg-gray-800 text-white p-8">
        <img  alt="Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">A Botanial Haven</h2>
          <p className="text-lg mb-4">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View all House Plants</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
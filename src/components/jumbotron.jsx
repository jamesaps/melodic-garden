import React from 'react';

const Jumbotron = () => {
  return (
    <div className="flex justify-between items-center">

      <div className="w-1/3">
        <img src="./plant1.png" alt="Image 1" className="w-full" />
      </div>

      <div className="w-1/3">
        <img src="./plant2.png" alt="Image 2" className="w-full" />
      </div>

      <div className="w-1/3 bg-gray-800 text-white p-8">
        <img src="./plant2.png" alt="Image" className="absolute inset-0 w-full h-full object-cover" />
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
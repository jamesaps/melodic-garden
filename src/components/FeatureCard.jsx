// import React from 'react';
const FeatureImage = "https://img.freepik.com/free-vector/aesthetic-phone-wallpaper-background-vector-leaf-shadow-with-natural-light_53876-140790.jpg?t=st=1710443985~exp=1710447585~hmac=08b260a1492168b5c9fa6e3a57b7de5cf7b68f46c8393efa320db3db5cdfbabb&w=740"
function CategoryCard() {
  return (
    // <div className="relative w-full rounded-lg bg-white flex justify-center">
    //   <img
    //     className="mb-4 w-3/4 rounded-3xl drop-shadow-xl h-72 "
    //     src="https://img.freepik.com/free-vector/aesthetic-phone-wallpaper-background-vector-leaf-shadow-with-natural-light_53876-140790.jpg?t=st=1710443985~exp=1710447585~hmac=08b260a1492168b5c9fa6e3a57b7de5cf7b68f46c8393efa320db3db5cdfbabb&w=740"
    //     alt=""
    //   />
      <div className="p-4 mb-4 rounded-3xl drop-shadow-xl h-60 md:h-full w-full flex items-end bg-none" style={{backgroundImage:`url(${FeatureImage})`}}>
        <div className="md:pl-5 pl-0 w-full">
        <h2 className="text-black-900 mb-6 font-bold text-4xl lg:text-6xl uppercase md:normal-case text-center md:text-left">
          Featured Plants
        </h2>
        <p
          className="text-xl text-black-900 mb-7 mr-16 hidden lg:block"
          
        >
          A curated collection of lush greenery, carefully chosen to bring
          vitality and style to your space.
        </p>
      </div>
      </div>
  );
}

export default CategoryCard;

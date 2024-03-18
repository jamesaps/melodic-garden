import React from "react";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

const Jumbotron = () => {
  return (
      <div className="h-full w-full">
        <div className="flex h-full items-stretch">
          <div className="hidden w-1/3 md:flex ">
            <img src={plant1} alt="Image 1" className="h-full w-full" />
          </div>

          <div className="hidden w-1/3 md:flex">
            <img src={plant2} alt="Image 2" className="h-full w-full" />
          </div>

          <div className="flex flex-col justify-between bg-green-900 p-6 md:w-1/3 ">
            <div className="mb-6 ">
              <img src={plant3} alt="Image3" className="w-md rounded-lg " />
            </div>
            <div className="z-10 mb-4 text-white">
              <h2 className="mb-4 text-left text-2xl font-bold">
                A Botanial Haven
              </h2>
              <p className="mb-6 text-left text-sm">
                A curated collection of lush greenery, carefully chosen to bring
                vitality and style to your space.
              </p>
              <button className=" text-m w-full rounded-full bg-white px-4 py-2 text-green-950 drop-shadow-lg hover:bg-emerald-600 hover:text-white ">
                View all House Plants
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Jumbotron;

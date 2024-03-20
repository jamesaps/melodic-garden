import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

const Jumbotron = () => {
  return (
    <div className="w-full">
      <div className="flex h-screen">
        <div className="hidden w-1/3 md:flex ">
          <img src={plant1} alt="Image 1" className="w-full object-cover object-center" />
        </div>

        <div className="hidden w-1/3 md:flex">
          <img src={plant2} alt="Image 2" className="w-full object-cover object-center" />
        </div>

        <div className="flex flex-col justify-between bg-green-900 p-6 pt-16 md:w-1/3 ">
          <div className="mt-6">
            <img
              src={plant3}
              alt="Image3"
              className="aspect-square rounded-lg object-cover object-center"
            />
          </div>
          <div className="mb-4 text-white">
            <h2 className="mb-4 text-left text-2xl font-bold">
              A Botanial Haven
            </h2>
            <p className="mb-6 text-left text-sm">
              A curated collection of lush greenery, carefully chosen to bring
              vitality and style to your space.
            </p>
            <NavLink to = "/products">
            <button className=" text-m w-full rounded-full bg-white px-4 py-2 text-green-950 drop-shadow-lg hover:bg-emerald-600 hover:text-white ">
              View all House Plants
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

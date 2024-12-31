import React from "react";
import { Categories } from "../assets/MockData";
import SonuImages from "../assets/Images/pk.jpg";
const Category = () => {
  return (
    <div className=" container mx-auto py-4 flex flex-col md:flex-row space-x-2">
      <div className="w-full md:w-3/12">
        <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
          SHOP BY CATEGORIES
        </div>
        <ul className="space-y-4 bg-gray-200 p-4">
          {Categories.map((Categories, index) => (
            <li key={index} className="flex items-center text-sm font-medium">
              <div className=" w-2 h-2 border border-red-500 rounded-full mr-2"></div>

              {Categories}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
        <img src={SonuImages} alt="" className="h-full w-full " />
        <div className="absolute top-16 left-8">
          <p className="text-green-600 mb-4 font-bold"> Code With Yoursaf</p>
          <h2 className="text-3xl  text-green-600 font-bold">
            WELCOME TO E- SHOP
          </h2>
          <p className="text-xl mt-2.5 font-bold text-green-500">
            MILLIONS+ PRODUCTS
          </p>
          <button className="bg-red-600 px-8 py-2.5 mt-4 hover:bg-red-800  transform transition-transform duration-300 hover:scale-105 rounded-lg text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;

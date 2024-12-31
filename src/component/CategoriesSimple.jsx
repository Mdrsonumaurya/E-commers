import React from "react";
import ManCetegory from "../assets/Images/Cardit.jpg";
import WomanCatgry from "../assets/Images/Woman.jpg";
import CreditCatgry from "../assets/Images/Woman2.jpg";

const categories = [
  {
    title: "Cardit",
    imageUrl: ManCetegory
  },
  {
    title: "Woman",
    imageUrl: WomanCatgry
  },
  {
    title: "Woman2",
    imageUrl: CreditCatgry
  }
];

const CategoriesSimple = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-700">
                {category.title}
              </p>
              <p className="text-blue-500 mt-2 cursor-pointer hover:underline">
                View All
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSimple;

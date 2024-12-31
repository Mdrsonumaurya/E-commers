import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      descriptin: "Get your orders delivered with no extra cost"
    },
    {
      icon: <FaHeadphones className="text-3xl text-red-600" />,
      title: "Support 24/7",
      descriptin: "We are here to assist you anytime"
    },
    {
      icon: <FaMoneyCheck className="text-3xl text-red-600" />,
      title: "100% Mony Back",
      descriptin: "Full Refund if you are not satisfied"
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment ",
      descriptin: "Your Payment information is safe with us"
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount ",
      descriptin: "Enjoy the best prices on our product"
    }
  ];

  return (
    <div className=" bg-white pb-8 pt-12">
      <div className="container max-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-md
           transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.descriptin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

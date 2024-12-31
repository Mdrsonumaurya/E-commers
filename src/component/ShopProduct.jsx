import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ShopProduct = () => {
  return (
    <div>
      <h1 className="flex text-3xl text-center justify-center hover:underline font-semibold sm:text-sm md:text-2xl lg:text-3xl space-x-2">
        <span className="text-red-600">S</span>hop Product
        <FaLongArrowAltRight className="mt-2 text-lime-600" />
      </h1>
    </div>
  );
};

export default ShopProduct;

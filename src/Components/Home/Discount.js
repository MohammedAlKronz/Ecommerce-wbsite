import React from "react";
import laptops from "../../images/laptops.png";

const Discount = () => {
  return (
    <div className="containerXl flex items-center justify-around max-md:flex-col rounded-lg mt-6 p-4 
    bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 max-md:w-5/6">
      <p className="text-white text-lg font-bold mb-6 xl:text-xl w-3/5 leading-7">خصم يصل حتى ٣٠٪ على أجهزة اللاب توب</p>
      <img src={laptops} className="max-sm:w-60 sm:w-60 md:w-80" />
    </div>
  );
};

export default Discount;

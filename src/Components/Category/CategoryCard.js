import React from "react";

const CategoryCard = ({ background, img, title }) => {

  return (
    <div className="flex flex-col items-center">
      <div className={`rounded-full w-36 h-36 center ${background}`}>
        <img src={img} alt="zzz" className="w-24 h-24" />
      </div>
      <p className="text-[#555550] text-lg mt-2 font-bold">{title}</p>
    </div>
  );
};

export default CategoryCard;

import React from "react";

const BrandCard = ({ img }) => {
  return (
    <div>
      <img src={img} className="rounded-xl w-64 bg-white" />
    </div>
  );
};

export default BrandCard;

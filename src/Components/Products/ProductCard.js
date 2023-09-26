import React from "react";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../customHook/products/ProductCardHook";

const ProductCard = ({ Item, favProd }) => {
  const [favImg, handelFav] = ProductCardHook(Item, favProd);

  return (
    <div className="rounded-lg bg-white shadow-xl">
      <Link to={`/products/${Item._id}`}>
        <img src={Item.imageCover} className="w-full h-56 rounded-lg" />
      </Link>
      <div className="flex justify-end mx-2">
        <img
          src={favImg}
          onClick={handelFav}
          className="w-7 h-7 cursor-pointer"
        />
      </div>
      <div className="p-3">
        <p className="text-[#555550] text-sm mb-2">{Item.title}</p>
        <div className="between">
          <div className="flex gap-2">
            <img src={rate} className="w-4 h-4" />
            <span className="text-[#ffc107] text-sm font-bold">
              {Item.ratingsAverage || 0}
            </span>
          </div>
          <div className="flex font-bold">
            <div className="ml-1">{Item.price}</div>
            <div>شيكل</div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default ProductCard;

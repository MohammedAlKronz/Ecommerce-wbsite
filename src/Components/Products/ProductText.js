import React, { useState } from "react";
import ViewProductDetailsHook from "../../customHook/products/ViewProductDetailsHook";
import { useParams } from "react-router-dom";
import AddToCartHook from "../../customHook/cart/AddToCartHook";
import { ToastContainer } from "react-toastify";

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductDetailsHook(id);
  const [indexColor, colorClick, addToCartHandel] = AddToCartHook(id, item);
  // console.log(item);
  // if (cat.name) // undefined عشان ما يطبعلي
  //   console.log(cat.name);
  // if (brand.name) console.log(brand.name);

  return (
    <div className="mt-3">
      <div>
        <h1 className="gray text-xs font-semibold mb-2">{cat.name} :</h1>
        <div className="flex gpa-3">
          <p className="text-sm text-[#555550] mb-1 ml-3">{item.title}</p>
          <p className="text-[#ffc107] text-sm font-semibold mr-1">
            {item.ratingsAverage}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <span className="gray text-xs font-semibold mb-2 ml-1">الماركة :</span>
        <span className="text-[#555550] text-lg font-semibold">
          {brand.name}
        </span>
        <div className="mt-1 flex gap-[6px]">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => colorClick(index, color)}
                    className="w-8 h-8 rounded-full cursor-pointer"
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? "3px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </div>
      </div>

      <div className="mt-6">
        <h1 className="gray text-xs font-semibold mb-2">المواصفات :</h1>
        <p className="text-[#555550] text-[13px] font-semibold leading-7 w-5/6">
          {item.description}
        </p>
      </div>

      <div className="mt-5">
        <span className="gray text-xs font-semibold mb-2 ml-1">
          الكمية المتاحة :
        </span>
        <span className="text-[#555550] text-sm font-semibold">
          {item.quantity} قطعة
        </span>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="bg-white p-4 border center text-xs font-semibold text-[#555550] rounded-lg">
          {item.price} شيكل
        </div>
        <div
          onClick={addToCartHandel}
          className="bg-black text-white hover:gray duration-500 p-4 rounded-lg cursor-pointer text-sm border"
        >
          أضف للعربة
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default ProductText;

// absolute bottom-10 max-lg:left-5 max-lg:bottom-0

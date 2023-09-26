import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitlity/SubTitle";
import AddProductsHook from "../../customHook/products/AddProductsHook";
import CardContainerHook from "../../customHook/products/CardContainerHook";

const CardProductsContainer = ({ products, title, btntitle, pathText }) => {

  // لازم ينحطن كلهم عشان الترتيب مهم هان
  const [category, brand, onSelect, onRemove, options, images, prodName, prodDescription, priceBefore, priceAfter,
    qty, loading, showColor, colors, removeColor, onSelectCategory, onSelectBrand, handelSubmit, setImages,
     handelChangeComplete, onChangeProdName, onChangeProdDescription, onChangePriceBefore, onChangePriceAfter,
      onChangeQty, onChangeColor, download] = AddProductsHook();

  const [favProd] = CardContainerHook();

  return (
    <div className="containerXl col-span-10 max-sm:px-5">
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}

      <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      { download === false ? (
        products ? (
          products.map((item, index) => (
            <ProductCard favProd={favProd} key={index} Item={item} />
          ))
        ) : (
          <h1 className="text-lg font-extrabold col-span-12 text-center gray">
            لا يوجد منتجات
          </h1>
        )
      ) : (
        <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
      )
}
      </div>
    </div>
  );
};

export default CardProductsContainer;





/*
 { download === false ? (
          products ? (
            products.map((item, index) => (
              <ProductCard key={index} Item={item} />
            ))
          ) : (
            <h1 className="text-lg font-extrabold col-span-12 text-center gray">
              لا يوجد منتجات
            </h1>
          )
        ) : (
          <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
        )
  }
*/
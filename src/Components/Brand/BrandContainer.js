import React from "react";
import BrandCard from "./BrandCard";

const BrandContainer = ({ data, loading }) => {
  return (
    <div className="containerXl max-sm:px-6">
      <p className="font-extrabold text-2xl text-[#555550] pb-8 pt-2">
        كل الماركات
      </p>
      <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading === false ? (
        data ? (
          data.map((item, index) => {
            return (
              <BrandCard key={index} img={item.image} />
            );
          })
        ) : (
          <h1 className="text-lg font-extrabold col-span-12 text-center gray">
            لا يوجد ماركات
          </h1>
        )
      ) : (
        <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
      )}
      </div>
    </div>
  );
};

export default BrandContainer;

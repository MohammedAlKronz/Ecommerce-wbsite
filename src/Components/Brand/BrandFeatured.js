import React from "react";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitlity/SubTitle";
import HomeBrandHook from "../../customHook/brand/HomeBrandHook";

const BrandCounter = ({ title, btntitle }) => {
  const [loading, brand] = HomeBrandHook();
  // console.log(brand);
  return (
    <div className="containerXl lg:max-[1100px]:px-6 md:max-[992px]:px-6 max-sm:px-5 mb-5">
      {brand.data ? (<div>
          <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
          <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-10 gap-6">
            {loading === false ? (
              brand.data ? (
                brand.data.slice(0, 6).map((item, index) => {
                  return <BrandCard key={index} img={item.image} />;
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
        </div>) : null}
    </div>
  );
};

export default BrandCounter;

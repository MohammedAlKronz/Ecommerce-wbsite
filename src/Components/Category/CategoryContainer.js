import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryContainer = ({ data, loading }) => {
  // const colors = [
  //   "#FFD3E8",
  //   "#F4DBA5",
  //   "#55CFDF",
  //   "#0034FF",
  //   "#FFD3E8",
  //   "#FF6262",
  // ];

  const colors = [
    "bg-pink-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-violet-400",
    "bg-red-400"
  ];

  return (
    <div className="containerXl lg:max-[1100px]:px-6 md:max-[992px]:px-6 max-sm:px-6">
      <p className="font-extrabold text-xl text-[#555550] pb-8 pt-2">
        كل التصنيفات
      </p>
      <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h1 className="text-lg font-extrabold col-span-12 text-center gray">
              لا يوجد تصنيفات
            </h1>
          )
        ) : (
          <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
        )}
      </div>
    </div>
  );
};

export default CategoryContainer;

/*
Math.floor(Math.random() * 5) + 1 ==> عشان اختار رقم عشوائي يكون فيه لون عشوائي من 0 ل5 
*/

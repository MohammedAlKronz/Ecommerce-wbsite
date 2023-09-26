import React from "react";
import SidebarSearchHook from "../../customHook/search/SidebarSearchHook";

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <div className="containerXl col-span-2">
      <div className="text-[#555550] min-w-max">
        <p className="font-semibold my-4 text-xl">الفئة</p>
        <form className="flex items-center">
          <input onChange={clickCategory} type="checkbox" value="0" />
          <label className="text-sm mr-2 mb-1">الكل</label>
        </form>
        {category ? (
          category.map((item, index) => {
            return (
              <form key={index} className="flex items-center">
                <input
                  onChange={clickCategory}
                  type="checkbox"
                  value={item._id}
                />
                <label className="text-sm mr-2 m-1">{item.name}</label>
              </form>
            );
          })
        ) : (
          <h1 className="text-xs">لا يوجد تصنيفات</h1>
        )}
      </div>
      <div className="text-[#555550]">
        <p className="font-semibold my-4 text-xl">الماركة</p>
        <form className="flex items-center">
          <input onChange={clickBrand} type="checkbox" value="0" />
          <label className="text-sm mr-2 mb-1">الكل</label>
        </form>
        {brand ? (
          brand.map((item, index) => {
            return (
              <form key={index} className="flex items-center">
                <input onChange={clickBrand} type="checkbox" value={item._id} />
                <label className="text-sm mr-2 m-1">{item.name}</label>
              </form>
            );
          })
        ) : (
          <h1 className="text-xs">لا يوجد براندات</h1>
        )}
      </div>
      <div className="text-[#555550]">
        <p className="font-semibold my-4 text-xl">السعر</p>
        <form className="flex items-center">
          <label className="text-sm ml-2">من: </label>
          <input
            value={localFrom}
            onChange={priceFrom}
            type="number"
            className="w-14 h-6 rounded border border-zinc-600 text-center"
          />
        </form>
        <form className="flex items-center mt-2">
          <label className="text-sm ml-[10px]">إلى: </label>
          <input
            value={localTo}
            onChange={priceTo}
            type="number"
            className="w-14 h-6 rounded border border-zinc-600 text-center"
          />
        </form>
      </div>
    </div>
  );
};

export default SideFilter;

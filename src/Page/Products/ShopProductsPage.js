import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitlity/SearchCountResult";
import SideFilter from "../../Components/Uitlity/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Uitlity/Pagination";
import ViewSearchProductsHook from "../../customHook/products/ViewSearchProductsHook";

const ShopProductsPage = () => {
  const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
  if (pagination) var pageCount = pagination;
  else pageCount = 0;

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <SearchCountResult onClick={getProduct} title={`هناك ${results} نتيجة بحث`} />
      <div className="containerXl grid grid-cols-12 max-sm:px-4 max-sm:gap-8">
        <SideFilter />
        <CardProductsContainer products={items} title="" btntitle="" />
      </div>
      <Pagination pageCount={pageCount} onPress={onPress} />
    </div>
  );
};

export default ShopProductsPage;

import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Uitlity/Pagination";
import AllBrandPageHook from "../../customHook/brand/AllBrandPageHook";

const AllBrandPage = () => {
  const [brand, loading, pageNum, getPage] = AllBrandPageHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      <Pagination pageCount={pageNum} onPress={getPage} />
    </div>
  );
};

export default AllBrandPage;

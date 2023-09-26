import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";

const AllBrandPageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // عشان يشتغل اول ما يتم تحميل الصفحة
    // When First Load
    dispatch(getAllBrand(4));
  }, []);

  // To Get State From Redux
  const brand = useSelector((state) => state.allBrand.brand); // عشان اصل للداتا
  const loading = useSelector((state) => state.allBrand.loading);

  // To Get Page Number
  let pageNum = 0;
  try {
    if (brand.paginationResult) {
      pageNum = brand.paginationResult.numberOfPages;
      // console.log(pageNum);
    }
    
  } catch (error) {
    
  }
  

  const getPage = (page) => {
    // When Press Pagination
    dispatch(getAllBrandPage(page));
    console.log(page);
  };
  return [brand, loading, pageNum, getPage];
};

export default AllBrandPageHook;

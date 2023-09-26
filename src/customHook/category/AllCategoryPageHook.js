import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../redux/actions/categoryAction";

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // عشان يشتغل اول ما يتم تحميل الصفحة
    // When First Load
    dispatch(getAllCategory(10));
  }, []);

  // To Get State From Redux
  const category = useSelector((state) => state.allCategory.category); // عشان اصل للداتا
  const loading = useSelector((state) => state.allCategory.loading);

  // To Get Page Number
  let pageNum = 0;
  try {
    if (category.paginationResult) {
      pageNum = category.paginationResult.numberOfPages;
      // console.log(pageNum);
    }
    
  } catch (error) {
    
  }

  const getPage = async(page) => {
    // When Press Pagination
    await dispatch(getAllCategoryPage(page));
    console.log(page);
  };
  return [category, loading, pageNum, getPage];
};

export default AllCategoryPageHook;

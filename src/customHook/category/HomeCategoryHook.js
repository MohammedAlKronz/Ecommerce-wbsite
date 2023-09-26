import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  // Get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  // Get last loading state from redux
  const loading = useSelector((state) => state.allCategory.loading);
  // console.log(category.data);
  // console.log(loading);

  // const colors = [
  //   "#FFD3E8",
  //   "#F4DBA5",
  //   "#55CFDF",
  //   "#0034FF",
  //   "#FFD3E8",
  //   "#FF6262",
  // ];

  // عشان ما استخدم الستايل واضل عالكلاس نيم لازم تكون صيغة الالوان زي مهي فالتيلوند مش نظام الشباك

  const colors = [
    "bg-pink-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-violet-400",
    "bg-red-400",
  ];
  return [loading, category, colors];
};

export default HomeCategoryHook;

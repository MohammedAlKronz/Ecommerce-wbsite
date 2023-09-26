import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  // Get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  // Get last loading state from redux
  const loading = useSelector((state) => state.allBrand.loading);

  return [loading, brand];
};

export default HomeBrandHook;

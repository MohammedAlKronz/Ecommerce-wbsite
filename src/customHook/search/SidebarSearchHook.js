import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProductsHook from "../products/ViewSearchProductsHook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);

  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  try {
    if (allCat.data) category = allCat.data;
  } catch (error) {}

  let brand = [];
  try {
    if (allBrand.data) brand = allBrand.data;
  } catch (error) {}

  var queryCat = "",
    queryBrand = "";

  const [catChecked, setCatChecked] = useState([]);

  // When user press any category.
  const clickCategory = (e) => {
    // console.log(e.target.value); // برجعلي الاي دي تبع التصنيف
    let value = e.target.value;
    if (value === "0") {
      // عشان حيعمل ريرندر من اول وجديد ومش حيلحق يقراهم فبسويهم جوا ميثود وباستدعيها يعني يقراراها اول ثم يعمل ريرندر من اول وجديد
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = catChecked.filter((e) => e !== value);
        setCatChecked(newArray);
      }
    }
  };

  useEffect(() => {
    //   val = id
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);

  //   console.log(queryCat);

  const [brandChecked, setBrandChecked] = useState([]);

  // When user press any category.
  const clickBrand = (e) => {
    // console.log(e.target.value); // برجعلي الاي دي تبع التصنيف
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };

  // console.log(catChecked);
  // console.log(brandChecked);

  useEffect(() => {
    //   val = id
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  const [from, setPriceFrom] = useState(0);
  const [to, setPriceTo] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };

  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [from, to]);

  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;

/*
1. بدي اعرض كل التصنيفات وكل الماركات 
*/

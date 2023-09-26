import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();
  const getProduct = async () => {
    getStorage();
    sortData();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  useEffect(() => {
    // dispatch(getAllProducts(limit));
    getProduct();
  }, []);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  // if (allProducts.data) console.log(allProducts.data); // عشان ما يصير اي مشكلة، لو فيه بيانات للمنتجات فرجيني اياهم

  // بدي اغير قيمته
  let items = [];
  let pagination = [];
  let results = 0;

  try {
    if (allProducts.data) items = allProducts.data;
    // ما بتأثر على الاريي الأصلية
    else items = [];
  } catch (e) {}

  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  try {
    if (allProducts.results) results = allProducts.results;
    else results = 0;
  } catch (e) {}

  // When click pagination.
  const onPress = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };

  // المتغيرات فمكان عام عشان اقدر اصللهم من اي مكان فالكود
  let priceFromString = "",
    priceToString = "";
  let word = "",
    queryCat = "",
    queryBrand = "",
    priceFrom = "",
    priceTo = "";

  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("catChecked") != null)
      queryCat = localStorage.getItem("catChecked");
    if (localStorage.getItem("brandChecked") != null)
      queryBrand = localStorage.getItem("brandChecked");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  let sortType = "",
    sort;

  // When user choose sort type.
  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType"); // لو المستخدم اختار طريقة بحث معينة خزنلي اياها فالمتغير هاد
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الأقل للأعلى") {
      sort = "+price";
    } else if (sortType === "السعر من الأعلى للأقل") {
      sort = "-price";
    } else if (sortType === "") {
      sort = ""; // بدون ترتيب
    } else if (sortType === "الأكثر مبيعاً") {
      sort = "-sold";
    } else if (sortType === "الأعلى تقييماً") {
      sort = "-ratingsQuantity"; // "-quantity"
    }
  };

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;

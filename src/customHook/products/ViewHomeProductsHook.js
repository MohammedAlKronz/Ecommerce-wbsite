import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  // if (allProducts.data) console.log(allProducts.data); // عشان ما يصير اي مشكلة، لو فيه بيانات للمنتجات فرجيني اياهم

  // بدي اغير قيمته
  let items = [];
  try {
    if (allProducts.data)
     items = allProducts.data.slice(0, 4);
    // ما بتأثر على الاريي الأصلية
    else items = [];
    
  } catch (error) {
    
  }

  return [items];
};

export default ViewHomeProductsHook;

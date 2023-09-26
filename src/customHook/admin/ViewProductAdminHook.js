import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(9));
  }, []);
  const allProducts = useSelector((state) => state.allProducts.allProducts);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 10));
  };
  // ما سويت يوز سيلكتور لاني شغال على نفس الاكشن وبصبوا فنفس الاريي فحيصير ريرندر للكومبوننت

  // بدي اغير قيمته
  let items = [];
  let pagination = [];

  // اي صفحة فيها ايررور لما اعمل رجوع بحط الكود الي زي هاد بين تراي كاتش

  try { 
  if (allProducts.data) items = allProducts.data; 
  else items = [];

  if (allProducts.paginationResult) pagination = allProducts.paginationResult.numberOfPages; 
  else pagination = [];
  } catch (e) { }
  return [items, pagination, onPress];
};

export default ViewProductAdminHook;
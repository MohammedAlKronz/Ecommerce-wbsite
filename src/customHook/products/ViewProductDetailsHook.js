import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductsLike,
} from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProduct = useSelector((state) => state.allProducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productsLike = useSelector((state) => state.allProducts.productsYouLike);

  // To show product item
  let item = [];
  try {
    if (oneProduct.data) item = oneProduct.data;
    else item = [];
  } catch (error) {}

  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getProductsLike(item.category));
  }, [item]);

  // To view images gallery
  let images = [];
  // return object
  try {
    if (item.images) {
      images = item.images.map((img) => {
        return { original: img };
      });
    } else {
      images = [{ original: `${mobile}` }];
    }
  } catch (error) {}

  // category == id + name
  // To show category item
  let cat = [];
  try {
    if (oneCategory.data) cat = oneCategory.data;
    else cat = [];
  } catch (error) {}
  // console.log(cat);

  // To show brand item
  let brand = [];
  try {
    if (oneBrand.data) brand = oneBrand.data;
    else brand = [];
  } catch (error) {}

  // console.log(cat);

  // To show productsLike item
  let prod = [];
  try {
    if (productsLike) prod = productsLike.data;
    else prod = [];
  } catch (error) {}

  // console.log(cat);

  return [item, images, cat, brand, prod];
};

export default ViewProductDetailsHook;

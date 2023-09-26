import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductFromWishList,
} from "../../redux/actions/wishListAction";
import favOff from "../../images/favOff.png";
import favOn from "../../images/favOn.webp";
import notify from "../useNotification";

const ProductCardHook = (Item, favProd) => {
  // favProd => هاي اريي فيها قائمة الاي دي تبعت المنتجات المفضلة
  // some => return boolean
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favOff);
  let Fav = favProd.some((item) => item === Item._id);
  const [isFav, setIsFav] = useState(Fav);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);

  useEffect(() => {
    setIsFav(favProd.some((item) => item === Item._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav === true) {
      // معناته المنتج من ضمن المنجات المفضلة فامسحهولي
      removeFromWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favOn);
    } else {
      setFavImg(favOff);
    }
  }, [isFav]);

  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  const addToWishListData = async () => {
    if (localStorage.getItem("token") != null && JSON.parse(localStorage.getItem("user")).role != "admin") {
      setIsFav(true);
      setFavImg(favOn);
      setLoadingAdd(true);
      await dispatch(
        addProductToWishList({
          productId: Item._id,
        })
      );
      setLoadingAdd(false);
    } else {
      notify("عليك تسجيل الدخول أولاً", "error");
    }
  };

  const removeFromWishListData = async () => {
    setIsFav(false);
    setFavImg(favOff);
    setLoadingRemove(true);
    await dispatch(removeProductFromWishList(Item._id));
    setLoadingRemove(false);
  };

  useEffect(() => {
    if (loadingAdd === false) {
      console.log(resAdd);
      if (resAdd && resAdd.status === 200) {
        notify("تم إضافة المنتج للمفضلة بنجاح", "success");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      console.log(resRemove);
      if (resRemove && resRemove.status === "success") {
        notify("تم إزالة المنتج من المفضلة بنجاح", "warn");
      }
    }
  }, [loadingRemove]);

  return [favImg, handelFav];
};

export default ProductCardHook;

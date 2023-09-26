import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";
import notify from "../useNotification";

const AddToCartHook = (prodId, item) => {
  const dispatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  // Add product to cart

  const addToCartHandel = async () => {
    if (item.availableColors.length >= 1) {
      if (colorText === "") {
        notify("من فضلك اختر لون للمنتج أولاً", "warn");
        return;
      } else {
        setColorText("");
      }
    }
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: prodId,
        color: colorText,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم إضافة المنتج إلى العربة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("قم بتسجيل الدخول أولاً", "warn");
      }
    }
  }, [loading]);

  return [indexColor, colorClick, addToCartHandel];
};

export default AddToCartHook;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAllCartItem, deleteCartItem } from "../../redux/actions/cartAction";
import notify from "../useNotification";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // Clear All Cart Items

  const handelDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.clearCart);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف العربة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [loading]);

  // Delete One Cart Item

  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const handelDeleteItem = async () => {
    await dispatch(deleteCartItem(item._id));
    setShow(false);
    window.location.reload(false);
  };

  return [handelDeleteCart, show, handelClose, handelShow, handelDeleteItem];
};

export default DeleteCartHook;

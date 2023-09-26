import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "./../../redux/actions/reviewAction";
import notify from "../useNotification";

const DeleteRateHook = (review) => {
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handelClose = () => setShowDelete(false);
  const handelShow = () => setShowDelete(true);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReview(review._id));
    setLoading(false);
    handelClose();
  };

  const res = useSelector((state) => state.reviewReducer.deleteReview);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        notify("هناك مشكلة في عملية المسح", "error");
      }
    }
  }, [loading]);

  let user = JSON.parse(localStorage.getItem("user"));

  // تتنفذ أول مرة فقط وما يحصل ريريندر كتير
  useEffect(() => {
    try {
      if (review.user._id === user._id) {
        setIsUser(true);
      }
    } catch (error) {}
  }, []);

  return [isUser, showDelete, handelClose, handelShow, handelDelete];
};

export default DeleteRateHook;

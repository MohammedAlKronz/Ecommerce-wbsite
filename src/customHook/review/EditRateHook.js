import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editReview } from "./../../redux/actions/reviewAction";
import notify from "../useNotification";

const EditRateHook = (review) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [showEdit, setShowEdit] = useState(false);
  const [newRateText, setNewRateText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);
  const handelCloseEdit = () => setShowEdit(false);
  const handelShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value); // input text
  };

  const onChangeRateValue = (val) => {
    setNewRateValue(val); // value
  };

  const handelEdit = async () => {
    setLoading(true);
    await dispatch(
      editReview(review._id, {
        review: newRateText,
        rating: newRateValue,
      })
    );
    setLoading(false);
    handelCloseEdit();
  };

  const res = useSelector((state) => state.reviewReducer.editReview);

  useEffect(() => {
    if (loading === false) {
    //   console.log(res);
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        notify("هناك مشكلة في عملية التعديل", "error");
      }
    }
  }, [loading]);

  return [
    showEdit,
    handelCloseEdit,
    handelEdit,
    handelShowEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  ];
};

export default EditRateHook;

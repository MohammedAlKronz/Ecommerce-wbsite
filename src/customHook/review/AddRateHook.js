import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotification";
import { createReview } from "./../../redux/actions/reviewAction";

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValue = (val) => {
    setRateValue(val);
  };

  var user = "";
  try {
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  } catch (error) {}

  // When save rate.
  const onSubmit = async () => {
    if (rateText === "") {
      notify("من فضلك اكتب تعليق", "error");
      return;
    }
    if (rateValue < 1) {
      notify("يجب أن يكون التقييم أكثر أو يساوي 1", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(id, {
        review: rateText,
        rating: rateValue,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.reviewReducer.review);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.status && res.status === 403) {
          notify("غير مسموح للأدمن بالتقييم", "error");
        } else if (
          res.data.errors &&
          res.data.errors[0].msg === "You already added review on this product"
        ) {
          notify("لقد قمت بإضافة تقييم لهذا المنتج مسبقاً", "error");
        } else if (res.status && res.status === 201) {
          notify("تم التقييم بنجاح، شكراً لاهتمامك بالمنتج", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 2000);
        }
      }
    }
  }, [loading]);

  return [
    rateText,
    rateValue,
    onChangeRateText,
    onChangeRateValue,
    user,
    onSubmit,
  ];
};

export default AddRateHook;

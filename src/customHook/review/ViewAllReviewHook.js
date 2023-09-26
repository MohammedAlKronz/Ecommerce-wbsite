import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allReviewProduct } from "./../../redux/actions/reviewAction";

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const allReview = useSelector(
    (state) => state.reviewReducer.allReviewProduct
  );

  useEffect(() => {
    setLoading(true);
    dispatch(allReviewProduct(id, 1, 3));
    setLoading(false);
  }, []);

  const onPress = async (page) => {
    await dispatch(allReviewProduct(id, page, 3));
  };

  return [allReview, onPress];
};

export default ViewAllReviewHook;

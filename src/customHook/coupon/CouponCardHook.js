import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";

const CouponCardHook = (coupon) => {
  const dispatch = useDispatch();
  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  // console.log(formatDate(dateString));

  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    window.location.reload(false);
  };

  return [dateString, formatDate, show, handelClose, handelShow, handelDelete];
};

export default CouponCardHook;

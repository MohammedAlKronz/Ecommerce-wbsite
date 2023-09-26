import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { addCoupon, getAllCoupon } from "../../redux/actions/couponAction";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const dateRef = useRef();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCouponName = (event) => {
    event.persist(); // Used with inputText in the event of a name change
    setCouponName(event.target.value);
  };
  const onChangeCouponDate = (event) => {
    event.persist();
    setCouponDate(event.target.value);
  };
  const onChangeCouponValue = (event) => {
    event.persist();
    setCouponValue(event.target.value);
  };

  // I must enter the validation before the request runs out

  const onSubmit = async () => {
    if (couponName === "" || couponDate === "" || couponValue <= 0) {
      notify("من فضلك أكمل البيانات!", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addCoupon({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.addCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
        // console.log(res);
        // الشغلات هاي بترجعلي من الباك اند
        notify("تم إضافة الكوبون بنجاح", "success");
        window.location.reload(false);
      } else if (res && res.status === 400) {
        notify("الكوبون موجود بالفعل!، اختر كوبوناً آخر", "error");
      } else if (res && res.status === 403) {
        notify("غير مسموح لك بالإضافة", "error");
      }
    }
  }, [loading]);

  // عشان اول ما تتحمل الصفحة بدي يظهرلي كل الكوبونات المتوفرة

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };
    get();
  }, []);

  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);

  let coupons = [];
  try {
    if (allCoupon && allCoupon.data.length >= 1) {
      // console.log(allCoupon.data);
      coupons = allCoupon.data;
    }
  } catch (error) {}

  return [
    dateRef,
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
    coupons,
  ];
};

export default AddCouponHook;

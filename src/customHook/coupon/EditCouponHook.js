import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { editCoupon, getOneCoupon } from "../../redux/actions/couponAction";
import { useNavigate } from "react-router-dom";

const EditCouponHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const oneCoupon = useSelector((state) => state.couponReducer.oneCoupon);

  // عشان اول ما تتحمل الصفحة بدي يظهرلي الكوبون حسب الاي دي تبعه
  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupon(id));
      setLoadingData(false);
    };
    get();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // حيصير ايرور ويضل يعمل ريرندر لذلك لازم احطه فيوز افكت

  useEffect(() => {
    if (loadingData === false) {
      if (oneCoupon.data) {
        setCouponName(oneCoupon.data.name);
        setCouponDate(formatDate(oneCoupon.data.expire));
        setCouponValue(oneCoupon.data.discount);
      }
    }
  }, [loadingData]);

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
      editCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.editCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        // الشغلات هاي بترجعلي من الباك اند
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate(`/admin/addcoupon`);
        }, 2000);
      } else {
        notify("فشلت عملية التعديل", "error"); // res = 400
      }
    }
  }, [loading]);

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
  ];
};

export default EditCouponHook;

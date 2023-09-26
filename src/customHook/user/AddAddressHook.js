import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotification";
import { addUserAddress } from "./../../redux/actions/userAddressesAction";

const AddAddressHook = () => {
  const dispatch = useDispatch(); // لاني حبعت ريكوست والريكوست حيتتطلب مني اكشن والاكشن حتتطلب ديسباتش
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetails = (event) => {
    event.persist();
    setDetails(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };
  const onSubmit = async () => {
    if (alias === "" || details === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addUserAddress({
        alias, // alias: alias,
        details,
        phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.userAddressesReducer.addUserAddress);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم إضافة العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 2000);
      } else {
        notify("هناك مشكلة في عملية الإضافة", "error");
      }
    }
  }, [loading]);

  return [
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onSubmit,
  ];
};

export default AddAddressHook;

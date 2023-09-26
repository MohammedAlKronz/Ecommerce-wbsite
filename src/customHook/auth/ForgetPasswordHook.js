import React, { useState, useEffect } from "react";
import notify from "./../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/actions/authAction";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const validationValues = () => {
    if (email === "") {
      notify("أدخل الايميل", "error");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    validationValues();
    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(
      forgetPassword({
        email, // email: email
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود بنجاح", "success");
          setTimeout(() => {
            navigate("/user/verify-code")
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("الحساب غير موجود", "error");
        }
      }
    }
  }, [loading]);

  return [email, onChangeEmail, onSubmit];
};

export default ForgetPasswordHook;

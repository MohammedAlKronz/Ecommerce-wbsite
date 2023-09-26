import React, { useState, useEffect } from "react";
import notify from "./../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (email === "") {
      notify("أدخل الايميل", "error");
      return;
    }
    if (password.length < 6) {
      notify("يجب أن تحتوي كلمة السر على الأقل 6 حروف أو أرقام", "warn");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  const onSubmit = async (e) => {
    e.preventDefault();
    validationValues();
    setIsPress(true);
    setLoading(true);
    await dispatch(
      loginUser({
        email, // email: email
        password, // password: password
      })
    );
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res.data);
        // console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            // navigate("/"); // حينقلني على الصفحة الرئيسية وحيعمل رفرش لكلشي الا النافبار
            window.location.href = "/"; // حيعمل رفرش لكلشي في الصفحة الرئيسية || وهاد حل لمشكلة عدم ظهور اسم اليوزر بدل كلمة دخول
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("الايميل أو كلمة السر خطأ", "error");
        }

        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;

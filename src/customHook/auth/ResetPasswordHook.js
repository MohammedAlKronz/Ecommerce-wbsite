import React, { useState, useEffect } from "react";
import notify from "./../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/actions/authAction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (password === "") {
      notify("أدخل كلمة السر", "error");
      return;
    }
    if (confirmPassword === "") {
      notify("أدخل كلمة السر مرة أخرى", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("كلمة السر غير متطابقة", "error");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.resetPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    validationValues();
    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم تغيير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("من فضلك اطلب كود جديد", "error");
        }
      }
    }
  }, [loading]);

  return [
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;

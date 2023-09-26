import React, { useState, useEffect } from "react";
import notify from "./../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // عشان أتنقل على مكان ثاني
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("أدخل اسم المستخدم", "error");
      return;
    }
    if (email === "") {
      notify("أدخل الايميل", "error");
      return;
    }
    if (phone === "" || phone.length < 11) {
      notify("رقم الهاتف غير صحيح", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("تأكد من تطابق كلمة السر", "error");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.createUser);

  // Save data
  const onSubmit = async (e) => {
    e.preventDefault(); // عشان لما اضغط عتسجيل الحساب بيعمل ريلود للصفحة فما بيستجيب للريسبونس
    validationValues();
    setLoading(true); // ما زال بيحمل
    await dispatch(
      createNewUser({
        name, // name: name, ( key == value in modern js )
        email, // email: email,
        password, // password: password,
        passwordConfirm: confirmPassword,
        phone, // phone: phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        if (res.data.errors) {
          // console.log(res.data.errors[0].msg);
          if (res.data.errors[0].msg === "E-mail already in use") {
            notify("هذا الايميل مسجل من قبل", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "accept only egypt phone numbers") {
            notify("يجب أين يتكون الهاتف من 11 رقم", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "must be at least 6 chars") {
            notify("يجب ألا تقل كلمة السر عن 6 حروف أو أرقام", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "Password confirmation is incorrect") {
            notify("كلمة السر غير متطابقة", "error");
          }
        }
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default RegisterHook;

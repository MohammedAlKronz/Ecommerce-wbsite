import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateUserPassword,
  updateUserProfileData,
} from "../../redux/actions/authAction";
import notify from "../useNotification";

const ProfileHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = [];
  try {
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  } catch (error) {}

  // console.log(user.name);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(true);

  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const handelEdit = async () => {
    let body;
    if (user.email === email) { // معناته انه اليوزر ما عدّل في الايميل
      body = {
        name,
        phone,
      };
    } else { // معناته انه اليوزر عدّل في الايميل
      body = {
        name,
        email,
        phone,
      };
    }
    setLoading(true);
    await dispatch(updateUserProfileData(body));
    setLoading(false);
    setShow(false);
  };

  const res = useSelector((state) => state.authReducer.userProfile);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تحديث بيانات المستخدم بنجاح", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        notify("فشلت عملية التحديث", "warn");
      }
    }
  }, [loading]);

  // Change user password

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  const onChangeOldPass = (event) => {
    event.persist();
    setOldPassword(event.target.value);
  };

  const onChangeNewPass = (event) => {
    event.persist();
    setNewPassword(event.target.value);
  };

  const onChangeConfirmPass = (event) => {
    event.persist();
    setConfirmNewPassword(event.target.value);
  };

  const changePassword = async () => {
    if (oldPassword === "") {
      notify("أدخل كلمة السر القديمة", "warn");
      return;
    }
    if (newPassword === "") {
      notify("أدخل كلمة السر الجديدة", "warn");
      return;
    }
    if (confirmNewPassword === "") {
      notify("تحقق من كلمة السر الجديدة", "warn");
      return;
    }
    if (confirmNewPassword != newPassword) {
      notify("تأكيد كلمة المرور غير متطابق", "warn");
      return;
    }
    setLoadingPass(true);
    await dispatch(
      updateUserPassword({
        currentPassword: oldPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword,
      })
    );
    setLoadingPass(false);
  };

  const resPass = useSelector((state) => state.authReducer.userChangePassword);

  useEffect(() => {
    if (loadingPass === false) {
      if (resPass && resPass.status === 200) {
        // console.log(resPass);
        notify("تم تغيير كلمة المرور بنجاح", "success");
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/login");
        }, 2000);
      } else {
        notify("فشلت عملية التحديث", "warn");
      }
    }
  }, [loadingPass]);

  return [
    user,
    show,
    handelClose,
    handelShow,
    handelEdit,
    name,
    phone,
    email,
    onChangeName,
    onChangePhone,
    onChangeEmail,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
    changePassword,
  ];
};

export default ProfileHook;

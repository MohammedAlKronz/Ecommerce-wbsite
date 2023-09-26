import React from "react";
import { Link } from "react-router-dom";
import RegisterHook from "../../customHook/auth/RegisterHook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
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
  ] = RegisterHook();
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl flex justify-center mt-12"
    >
      <form className="flex flex-col">
        <label className="text-[#555550] font-extrabold text-2xl mx-auto">
          تسجيل حساب جديد
        </label>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="اسم المستخدم..."
        />
        <input
          value={email}
          onChange={onChangeEmail}
          type="email"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="الايميل..."
        />
        <input
          value={phone}
          onChange={onChangePhone}
          type="number"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="الهاتف..."
        />
        <input
          value={password}
          onChange={onChangePassword}
          type="password"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="كلمة السر..."
        />
        <input
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          type="password"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="تأكيد كلمة السر..."
        />
        <button
          onClick={onSubmit}
          className="bg-zinc-900 text-white hover:text-gray-300 duration-300 p-3 w-96 mt-5 mx-auto 
          rounded-lg text-center"
        >
          تسجيل الدخول
        </button>

        <label className="mx-auto mt-6">
          لديك حساب بالفعل ؟
          <Link to="/login" className="text-red-500">
            {" "}
            اضغط هنا
          </Link>
        </label>
        <ToastContainer />
      </form>
    </div>
  );
};

export default RegisterPage;

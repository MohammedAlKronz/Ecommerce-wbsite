import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../customHook/auth/LoginHook";

const LoginPage = () => {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] =
    LoginHook();
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl flex justify-center mt-12"
    >
      <form className="flex flex-col">
        <label className="text-[#555550] font-extrabold text-2xl mx-auto">
          تسجيل الدخول
        </label>
        <input
          value={email}
          onChange={onChangeEmail}
          type="email"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="الايميل..."
        />
        <input
          value={password}
          onChange={onChangePassword}
          type="password"
          className="bg-white w-96 h-9 mt-5 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="كلمة السر..."
        />
        <input
          onClick={onSubmit}
          type="submit"
          className="bg-zinc-900 text-white hover:text-gray-300 duration-300 p-3 w-96 mt-5 mx-auto rounded-lg text-center cursor-pointer"
          value="تسجيل الدخول"
        />
        <label className="mx-auto mt-6">
          ليس لديك حساب ؟
          <Link to="/register" className="text-red-500">
            {" "}
            اضغط هنا
          </Link>
        </label>
        <label className="mx-auto mt-6">
          <Link to="/user/forget-password" className="text-red-500">
            هل نسيت كلمة السر ؟
          </Link>
        </label>
        {isPress === true ? (
          loading === true ? (
            <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
          ) : null
        ) : null}
        <ToastContainer />
      </form>
    </div>
  );
};

export default LoginPage;

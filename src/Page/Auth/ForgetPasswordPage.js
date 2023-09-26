import React from "react";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../customHook/auth/ForgetPasswordHook";

const ForgetPasswordPage = () => {
  const [email, onChangeEmail, onSubmit] = ForgetPasswordHook();
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl flex justify-center mt-12"
    >
      <form className="flex flex-col">
        <label className="text-[#555550] font-extrabold text-2xl mx-auto">
          نسيت كلمة السر
        </label>
        <input
          value={email}
          onChange={onChangeEmail}
          type="email"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="أدخل الايميل..."
        />
        <input
          onClick={onSubmit}
          type="submit"
          className="bg-zinc-900 text-white hover:text-gray-300 duration-300 p-3 w-96 mt-5 mx-auto rounded-lg text-center cursor-pointer"
          value="ارسال الكود"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default ForgetPasswordPage;

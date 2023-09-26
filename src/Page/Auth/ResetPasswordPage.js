import React from "react";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../customHook/auth/ResetPasswordHook";

const ResetPasswordPage = () => {
  const [password, confirmPassword, onChangePassword, onChangeConfirmPassword, onSubmit] = ResetPasswordHook();
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl flex justify-center mt-12"
    >
      <form className="flex flex-col">
        <label className="text-[#555550] font-extrabold text-2xl mx-auto">
          أدخل كلمة السر الجديدة
        </label>
        <input
          value={password}
          onChange={onChangePassword}
          type="password"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="أدخل كلمة السر الجديدة..." 
        />
        <input
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          type="password"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="تأكيد كلمة السر الجديدة..."
        />
        <input
          onClick={onSubmit}
          type="submit"
          className="bg-zinc-900 text-white hover:text-gray-300 duration-300 p-3 w-96 mt-5 mx-auto rounded-lg text-center cursor-pointer"
          value="حفظ"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default ResetPasswordPage;

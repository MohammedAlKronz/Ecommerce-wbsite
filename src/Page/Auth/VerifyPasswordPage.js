import React from "react";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "../../customHook/auth/VerifyPasswordHook";

const VerifyPasswordPage = () => {
  const [code, onChangeCode, onSubmit] = VerifyPasswordHook();
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl flex justify-center mt-12"
    >
      <form className="flex flex-col">
        <label className="text-[#555550] font-extrabold text-2xl mx-auto">
          أدخل الكود المرسل على الايميل
        </label>
        <input
          value={code}
          onChange={onChangeCode}
          type="number"
          className="bg-white w-96 h-9 mt-4 mx-auto rounded-lg border border-[gray] text-center"
          placeholder="أدخل الكود..."
        />
        <input
          onClick={onSubmit}
          type="submit"
          className="bg-zinc-900 text-white hover:text-gray-300 duration-300 p-3 w-96 mt-5 mx-auto rounded-lg text-center cursor-pointer"
          value="تأكيد"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default VerifyPasswordPage;

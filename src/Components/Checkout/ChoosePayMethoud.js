import React from "react";

const ChoosePayMethoud = () => {
  return (
    <div className="containerXl px-5">
      <div className="pt-12 mb-2 font-extrabold text-2xl text-[#555550]">
        اختر طريقة الدفع
      </div>
      <div className="bg-white shadow rounded-lg my-3 py-7 px-4">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="group"
            className="w-4 h-4"
          />
          <label className="text-base" for="group1">
            الدفع عن طريق البطاقه الائتمانية
          </label>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <input
            type="radio"
            name="group"
            className="w-4 h-4"
          />
          <label className="text-base" for="group1">
            الدفع عند الاستلام
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <div className="border bg-white rounded-lg center text-[#555550] text-xs font-bold px-12 py-4">
          $ 340
        </div>
        <button className="text-white center hover:gray duration-500 rounded-lg text-sm bg-black py-3 px-5">
          إتمام الشراء
        </button>
      </div>
    </div>
  );
};

export default ChoosePayMethoud;

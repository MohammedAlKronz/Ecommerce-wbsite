import React from "react";
import CartItem from "../Cart/CartItem";

const AdminOrderDetails = () => {
  return (
    <div>
      <div className="font-extrabold text-2xl text-[#555550] mb-2">
        تفاصيل الطلب رقم #55
      </div>
      <CartItem />
      <CartItem />
      <CartItem />

      <div className="bg-white rounded-lg my-5 pt-2 shadow">
        <div className="px-4">
          <h1 className="font-extrabold text-[22px] text-[#555550] mb-3">
            تفاصيل العميل
          </h1>
          <div className="flex gap-2 mb-2">
            <p className="text-[#555550]">الاسم:</p>
            <span className="gray">احمد عبد الله</span>
          </div>
          <div className="flex gap-2 mb-2">
            <p className="text-[#555550]">رقم الهاتف:</p>
            <span className="gray">0021313432423</span>
          </div>
          <div className="flex gap-2 mb-2">
            <p className="text-[#555550]">الايميل:</p>
            <span className="gray">ahmed@gmail.com</span>
          </div>
        </div>
        <div className="p-2 border text-center">المجموع ٤٠٠٠ شيكل</div>
        <div className="p-3 flex justify-center gap-2">
            <select className="w-1/2 p-[10px] rounded-lg text-center gray border border-gray-400 bg-gray-50">
                <option>حالة الطلب</option>
                <option>قيد التنفيذ</option>
                <option>تم الانتهاء</option>
                <option>الغاء</option>
            </select>
            <button className="duration-500 text-white hover:text-[#555550] bg-black py-2 px-4 font-semibold rounded-lg">حفظ</button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;

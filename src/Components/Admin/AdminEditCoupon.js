import React from "react";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../customHook/coupon/EditCouponHook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const { id } = useParams();
  const [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
  ] = EditCouponHook(id);
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-5 col-span-12">
        تعديل بيانات الكوبون
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <input
          value={couponName}
          onChange={onChangeCouponName}
          type="text"
          placeholder="اسم الكوبون"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full mb-4"
        />
        <input
          value={couponDate}
          onChange={onChangeCouponDate}
          type="text"
          placeholder="تاريخ الإنتهاء"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full mb-4"
        />
        <input
          value={couponValue}
          onChange={onChangeCouponValue}
          type="number"
          placeholder="نسبة الخصم"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full mb-4"
        />

        <div className="flex justify-end w-full">
          <button
            onClick={onSubmit}
            className="duration-500 text-white hover:text-[#555550] bg-black py-3 px-6 rounded-lg"
          >
            حفظ التعديل
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default AdminEditCoupon;

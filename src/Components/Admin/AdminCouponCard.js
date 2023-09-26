import React from "react";
import { Link } from "react-router-dom";
import CouponCardHook from "../../customHook/coupon/CouponCardHook";
import { Modal } from "react-bootstrap";

const AdminCouponCard = ({ coupon }) => {
  // console.log(coupon);
  const [dateString, formatDate, show, handelClose, handelShow, handelDelete] =
    CouponCardHook(coupon);
  return (
    <div className="bg-white shadow rounded-lg pt-2 pb-4 px-3 mb-4">
      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={show}
        onHide={handelClose}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-red-600 font-bold text-xl ">تأكيد الحذف</div>
          <div className="font">هل أنت متأكد من حذف التقييم</div>
          <div className="flex justify-end gap-2">
            <button
              className="p-2 bg-blue-600 rounded hover:bg-blue-900 text-white"
              onClick={handelClose}
            >
              تراجع
            </button>
            <button
              className="p-2 bg-red-600 rounded hover:bg-red-900 text-white"
              onClick={handelDelete}
            >
              حذف
            </button>
          </div>
        </div>
      </Modal>
      <div className="between mb-4">
        <div className="flex gap-2 mb-2">
          <p>اسم الكوبون:</p>
          <span className="text-[#555550]">{coupon.name}</span>
        </div>
        <div className="flex items-center">
          <Link to={`/admin/editcoupon/${coupon._id}`}>
            <div>
              <i class="fa-solid fa-pen"></i>
              <span className="text-sm gray mx-2">تعديل</span>
            </div>
          </Link>
          <div onClick={handelShow} className="cursor-pointer">
            <i class="fa-regular fa-trash-can"></i>
            <span className="text-sm gray mr-2">إزالة</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        <p className="mb-4">تاريخ الإنتهاء:</p>
        <span className="text-[#555550]">{formatDate(dateString)}</span>
      </div>
      <div className="flex gap-2 mb-2">
        <p>نسبة الخصم:</p>
        <span className="text-[#555550]">{coupon.discount}%</span>
      </div>
    </div>
  );
};

export default AdminCouponCard;

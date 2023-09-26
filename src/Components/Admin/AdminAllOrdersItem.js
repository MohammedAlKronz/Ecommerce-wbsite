import React from "react";
import mobile from "../../images/mobile.png";
import { Link } from "react-router-dom";

const AdminAllOrdersItem = () => {
  return (
    <div className="grid grid-cols-12 mb-3 px-3 bg-white rounded-2xl pb-5">
      <img
        src={mobile}
        className="w-36 h-48 max-sm:w-48 max-sm:h-52 col-span-2 max-lg:col-span-3 max-sm:col-span-5 cursor-pointer"
      />
      <div className="col-span-10 max-lg:col-span-9 max-sm:col-span-7 px-2">
        <Link to="/admin/orders/:id">
          <div className="between pt-4 mb-5 text-xs gray font-semibold">
            <div className="">طلب رقم #2321</div>
            <span>إزالة</span>
          </div>
        </Link>
        <div className="flex max-sm:justify-between">
          <span className="text-sm text-[#555550] ml-2">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
          </span>
          <span className="text-[#ffc107] text-sm font-bold">4.5</span>
        </div>
        <div className="my-1 flex items-center">
          <span className="gray text-xs font-semibold ml-1">الماركة :</span>
          <span className="text-[#555550] text-lg font-semibold ml-1">ابل</span>
          <div className="bg-red-500 w-7 h-7 rounded-full cursor-pointer border border-slate-200"></div>
        </div>
        <div className="between">
          <div className="my-2">
            <span className="gray text-xs font-semibold mb-2 ml-1">الكمية</span>
            <input
              type="number"
              className="w-10 h-6 border border-[#979797] rounded-sm"
            />
          </div>
          <div className="text-[#555550] font-semibold text-lg">30 $</div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllOrdersItem;

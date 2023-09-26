import React from "react";
import mobile from "../../images/mobile.png";

const UserAllOrderCard = () => {
  return (
    <div className="flex gap-10 mb-2 col-span-12">
      <div className="col-span-3">
        <img src={mobile} className="w-20 h-28 mx-5" />
      </div>
      <div className="col-span-9">
        <div className="mb-5">
          <p className="w-4/5 text-[#555550] text-sm leading-6">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر
            <span className="mx-2 text-[#ffc107] text-sm font-bold">4.5</span>
            <span className="gray text-xs">(160 تقييم)</span>{" "}
          </p>
        </div>
        <div className="my-2">
          <span className="gray text-xs font-semibold mb-2 ml-2">الكمية</span>
          <input
            type="number"
            className="w-10 h-6 border text-center border-[#979797] rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default UserAllOrderCard;

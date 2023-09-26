import React from "react";

import UserAllOrderCard from "./UserAllOrderCard";

const UserAllOrderItem = () => {
  return (
    <div className="bg-white shadow w-full rounded-lg mb-2 grid grid-cols-12">
      <div className="py-2 px-3 font-semibold col-span-12">طلب رقم #234556</div>
      <UserAllOrderCard />
      <UserAllOrderCard />
      <UserAllOrderCard />
      <div className="flex justify-between col-span-12 p-2">
            <div className="flex items-center gap-2">
                <div>الحالة</div>
                <div className="text-xs gray">قيد التنفيذ</div>
            </div>
            <div className="text-[#555550] font-bold text-lg">40$</div>
        </div>
    </div>
  );
};

export default UserAllOrderItem;

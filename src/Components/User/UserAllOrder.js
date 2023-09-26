import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";

const UserAllOrder = () => {
  return (
    <div>
      <div className="font-extrabold text-[22px] text-[#555550] mb-5">
        أهلاً محمد الكرنز
      </div>
      <UserAllOrderItem />
      <UserAllOrderItem />
      <UserAllOrderItem />
    </div>
  );
};

export default UserAllOrder;

import React from "react";
import AdminAllOrdersItem from "./AdminAllOrdersItem";

const AdminAllOeders = () => {
  return (
    <div>
      <div className="font-extrabold text-2xl text-[#555550] mb-2">
        إدارة جميع الطلبات
      </div>
      <AdminAllOrdersItem />
      <AdminAllOrdersItem />
      <AdminAllOrdersItem />
    </div>
  );
};

export default AdminAllOeders;

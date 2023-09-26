import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="bg-white rounded-3xl h-5/6">
      <ul className="text-center font-bold text-xs pt-4">
        <Link to="/admin/allorders">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">إدارة الطلبات</li>
        </Link>
        <Link to="/admin/allproducts">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">إدارة المنتجات</li>
        </Link>
        <Link to="/admin/addbrand">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">أضف ماركة</li>
        </Link>
        <Link to="/admin/addcategory">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">أضف تصنيف</li>
        </Link>
        <Link to="/admin/addsubcategory">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">أضف تصنيف فرعي</li>
        </Link>
        <Link to="/admin/addproduct">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">أضف منتج</li>
        </Link>
        <Link to="/admin/addcoupon">
          <li className="border-b py-3 duration-300 rounded hover:text-white hover:bg-black">أضف كوبون</li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSideBar;

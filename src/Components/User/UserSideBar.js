import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="bg-white rounded-3xl h-5/6">
      <ul className="text-center font-bold text-xs pt-4">
        <Link to="/user/allorders">
          <li className="border-b p-2 mt-2 duration-300 rounded hover:text-white hover:bg-black">
            إدارة الطلبات
          </li>
        </Link>
        <Link to="/user/favoriteproducts">
          <li className="border-b p-2 my-2 duration-300 rounded hover:text-white hover:bg-black">
            المنتجات المفضلة
          </li>
        </Link>
        <Link to="/user/addresses">
          <li className="border-b p-2 my-2 duration-300 rounded hover:text-white hover:bg-black">
            العناوين الشخصية
          </li>
        </Link>
        <Link to="/user/profile">
          <li className="border-b p-2 my-2 duration-300 rounded hover:text-white hover:bg-black">
            الملف الشخصي
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserSideBar;

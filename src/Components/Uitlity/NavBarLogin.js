import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import NavBarSearchHook from "./../../customHook/search/NavBarSearchHook";
import GetAllUserCartHook from "../../customHook/cart/GetAllUserCartHook";

const NavBarLogin = () => {
  // const dispatch = useDispatch();
  const [onChangeSearch, word, user, handler, logOut, show, setShow] = NavBarSearchHook();
  const [itemsNum] = GetAllUserCartHook();

  return (
    <div className="bg-zinc-900 p-4">
      <div className="containerXl flex items-center gap-3 navbar-login-container">
        <a href="/">
          <img src={logo} className="w-11 h-11"></img>
        </a>
        <input
          value={word}
          onChange={onChangeSearch}
          type="search"
          placeholder="ابحث.."
          className="flex flex-1 w-full p-2 rounded-md text-center outline-none focus:outline-4 focus:outline-blue-700 focus:outline-offset-0"
        ></input>
        <div className="flex gap-2 max-sm:flex-col relative">
          {user != "" ? (
            <div className="relative z-10">
              <p
                className="cursor-pointer text-white flex items-center gap-1"
                onClick={() => setShow(!show)}
              >
                <img src={login} className="w-5 h-5"></img>
                {user.name}
              </p>
              {show === true ? (
                <div className="bg-zinc-900 text-white absolute -left-10 top-12 p-2 shadow w-44 text-sm text-center gray flex flex-col">
                  {user.role === "admin" ? (
                    <a
                      className="border-b border-gray-400 p-3 hover:text-zinc-900 hover:bg-white"
                      href="/admin/allproducts"
                    >
                      لوحة التحكم
                    </a>
                  ) : (
                    <a
                      className="border-b border-gray-400 p-3 hover:text-zinc-900 hover:bg-white"
                      href="/user/profile"
                    >
                      الصفحة الشخصية
                    </a>
                  )}

                  <a
                    onClick={logOut}
                    className="p-3 hover:text-zinc-900 hover:bg-white"
                    href="/"
                  >
                    تسجيل خروج
                  </a>
                </div>
              ) : null}
            </div>
          ) : (
            <a href="/login" className="flex items-center">
              <img src={login} className="w-5 h-5"></img>
              <p className="text-white mr-1">دخول</p>
            </a>
          )}

          <a href="/cart" className="flex items-center mr-2 relative">
            <img src={cart} className="w-5 h-5"></img>
            <p className="text-white mr-1">العربة</p>
            <span className="absolute -top-4 -left-3 p-[2px] rounded-full w-5 h-5 text-center text-xs text-white bg-red-600 max-sm:-top-3 max-sm:left-7">
              {itemsNum || 0}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBarLogin;

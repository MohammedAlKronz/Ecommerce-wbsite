import React from "react";
import { Link } from "react-router-dom";
import DeleteCartHook from "../../customHook/cart/DeleteCartHook";
import { ToastContainer } from "react-toastify";

const CartCheckout = ({ totalCartPrice }) => {
  const [handelDeleteCart] = DeleteCartHook();
  return (
    <div className="bg-white rounded-2xl p-3">
      <div className="flex mb-3">
        <input
          type="text"
          className="text-center text-xs gray w-11/12 p-3 border border-[#555550]"
          placeholder="كود الخصم"
        />
        <button className="text-white hover:gray duration-500 text-xs bg-black px-3 py-4">
          تطبيق
        </button>
      </div>

      <div className="mb-3 border rounded-lg center text-[#555550] text-xs font-bold p-4">
        {totalCartPrice || 0} $
      </div>
      <Link
        to="/order/paymethoud"
        className="text-white w-full center mb-3 hover:gray duration-500 rounded-lg text-sm bg-black p-3"
      >
        إتمام الشراء
      </Link>
      <button
        onClick={handelDeleteCart}
        className="text-white w-full center mb-3 hover:gray duration-500 rounded-lg text-sm bg-black p-3 mt-3"
      >
        مسح العربة
      </button>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default CartCheckout;

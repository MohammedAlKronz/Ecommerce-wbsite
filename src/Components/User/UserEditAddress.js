import React from "react";
import { useParams } from "react-router-dom";
import EditAddressHook from "../../customHook/user/EditAddressHook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, handelEdit] =EditAddressHook(id);
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-4 col-span-12">
        تعديل العنوان
      </div>
      <div className="max-sm:col-span-12 sm:col-span-10 md:col-span-8">
        <input
          value={alias}
          onChange={onChangeAlias}
          type="text"
          placeholder="تسمية العنوان مثلاً (المنزل - العمل)"
          className="p-2 w-full bg-gray-100 border border-gray-400 rounded-lg mb-4"
        />
        <textarea
          value={details}
          onChange={onChangeDetails}
          placeholder="العنوان بالتفصيل"
          className="w-full p-2 h-28 bg-gray-100 border border-gray-400 rounded-lg mb-4"
        ></textarea>
        <input
          value={phone}
          onChange={onChangePhone}
          type="text"
          placeholder="رقم الهاتف"
          className="p-2 w-full bg-gray-100 border border-gray-400 rounded-lg mb-2"
        />
        <div className="flex justify-end w-full">
          <button onClick={handelEdit} className="duration-500 text-white hover:text-[#555550] bg-black py-3 px-6 rounded-lg">
            حفظ تعديل العنوان
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default UserEditAddress;

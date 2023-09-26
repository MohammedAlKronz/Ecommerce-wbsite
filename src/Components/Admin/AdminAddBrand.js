import React from "react";
import AddBrandHook from "../../customHook/brand/AddBrandHook";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {
  const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] = AddBrandHook(); // Destruction
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-5 col-span-12">
        أضف ماركة جديدة
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <p className="gray mb-2">صورة الماركة</p>
        <div>
          <label for="upload-photo">
            <img src={img} alt="asd" className="h-24 w-32 cursor-pointer" />
          </label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
            onChange={onImageChange}
            className="opacity-0 absolute -z-10"
          />
        </div>
        <input
          type="text"
          value={name}
          placeholder="اسم الماركة"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full my-2"
          onChange={onChangeName}
        />
        <div className="flex justify-end w-full">
          <button onClick={handelSubmit} className="duration-500 text-white hover:text-[#555550] bg-black py-3 px-6 rounded-lg">
            حفظ التعديلات
          </button>
        </div>
        {isPress ? (
          loading ? (
            <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
          ) : (
            <h4>تم الانتهاء</h4>
          )
        ) : null}
      </div>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default AdminAddBrand;

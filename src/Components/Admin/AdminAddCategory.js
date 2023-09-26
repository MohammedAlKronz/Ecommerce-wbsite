import React from "react";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "../../customHook/category/AddCategoryHook";

const AdminAddCategory = () => {
  const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] = AddCategoryHook(); // Destruction
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-5 col-span-12">
        أضف تصنيف جديدة
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <p className="gray text-lg mb-2">صورة التصنيف</p>
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
          onChange={onChangeName}
          value={name}
          type="text"
          placeholder="اسم الماركة"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full my-2"
        />
        <div className="flex justify-end w-full">
          <button
            onClick={handelSubmit}
            className="duration-500 text-white hover:text-[#555550] bg-black mb-5 py-3 px-6 rounded-lg"
          >
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

export default AdminAddCategory;

// const res = axios.get(""); // لما أكون عاوز أجيب بيانات
// const res = axios.post("http://127.0.0.1:8000/api/v1/categories", {name: "ahmed", age:"20"}); // لما أبعت بيانات عادية
// لما ابعت صور .. طبعا هاد كله بدون ريدكس
// const res = axios.post("http://127.0.0.1:8000/api/v1/categories",
// {name: "ahmed", age: "20"},
// headers:{"Counter-Type":"multipart/form-data"});

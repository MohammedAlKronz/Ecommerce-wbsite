import React from "react";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../customHook/subcategory/AddSubCategoryHook";

const AdminAddSubCategory = () => {
  const [id, name, loading, category, subcategory, handelChange, handelSubmit, onChangeName] = AddSubCategoryHook();
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-7 col-span-12">
        أضف تصنيف فرعي جديد
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="اسم التصنيف الفرعي"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full mb-4" />
        <select 
          className="bg-white gray w-full p-2 rounded-lg border border-gray-300 mb-2" 
          placeholder="التصنيف الأول" 
          name="category" id="cat" onChange={handelChange} >
          <option value="0">اختر تصنيف رئيسي</option> 
          {
            category.data ? (category.data.map(item => {
              return (
                <option key={item._id} value={item._id}>{item.name}</option>
              )
            })) : null
          }
        </select>
        <div className="flex justify-end w-full">
          <button onClick={handelSubmit} className="duration-500 text-white hover:text-[#555550] bg-black py-3 px-6 rounded-lg">
            حفظ التعديلات
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" rtl />
    </div>
  );
};

export default AdminAddSubCategory;

// id sorted by value
import React from "react";
import { useParams } from "react-router-dom";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import EditProductsHook from "../../customHook/products/EditProductsHook";

const AdminEditProducts = () => {
  // بدي اجيب الاي دي من اليو ار ال
  const { id } = useParams();
  const [category, brand, onSelect, onRemove, options, images, prodName, prodDescription, priceBefore, priceAfter, 
    qty, loading, showColor, colors, catID, brandID, removeColor, onSelectCategory, onSelectBrand, handelSubmit, 
    setImages, handelChangeComplete, onChangeProdName, onChangeProdDescription, onChangePriceBefore, 
    onChangePriceAfter, onChangeQty, onChangeColor, download] = EditProductsHook(id);
  return (
    <div className="grid grid-cols-12">
      <div className="font-extrabold text-[22px] text-[#555550] mb-5 col-span-12">
        تعديل المنتج - {prodName}
      </div>
      <div className="col-span-8 max-sm:col-span-12">
        <p className="gray text-lg mb-2">صور للمنتج</p>

        <MultiImageInput
          images={images}
          setImages={setImages}
          theme={"light"}
          allowCrop={false}
          max={5}
        />

        <input
          value={prodName}
          onChange={onChangeProdName}
          type="text"
          placeholder="اسم المنتج"
          className="p-2 rounded-lg bg-gray-100 border border-gray-300 w-full mb-4"
        />

        <textarea
          value={prodDescription}
          onChange={onChangeProdDescription}
          className="bg-gray-100 border border-gray-300 p-2 w-full h-28 rounded-lg mb-4"
          placeholder="وصف المنتج"
        ></textarea>

        <div className="flex flex-col">
          <input
            value={priceBefore}
            onChange={onChangePriceBefore}
            type="number"
            placeholder="السعر قبل الخصم"
            className="mb-4 p-2 bg-gray-100 border border-gray-300 rounded-lg"
          />
          <input
            value={priceAfter}
            onChange={onChangePriceAfter}
            type="number"
            placeholder="السعر بعد الخصم"
            className="mb-4 p-2 bg-gray-100 border border-gray-300 rounded-lg"
          />
          <input
            value={qty}
            onChange={onChangeQty}
            type="number"
            placeholder="الكمية المتاحة"
            className="mb-4 p-2 bg-gray-100 border border-gray-300 rounded-lg"
          />
        </div>

        <select
          name="cat"
          value={catID}
          className="gray w-full p-2 rounded-lg bg-gray-100 border border-gray-300 mb-4"
          onChange={onSelectCategory}
        >
          <option value="0">التصنيف الرئيسي</option>
          {category.data
            ? category.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>

        <Multiselect
          className="mb-4"
          placeholder="التصنيف الفرعي"
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
        />

        <select
          className="gray w-full p-2 rounded-lg bg-gray-100 border border-gray-300 mb-4"
          value={brandID}
          onChange={onSelectBrand}
        >
          <option value="0">اختر ماركة</option>
          {brand.data
            ? brand.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
        <div className="gray">الألوان المتاحة للمنتج</div>
        <div className="mt-1 flex items-center gap-2">
          {colors.length >= 1
            ? colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => removeColor(color)}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 rounded-full cursor-pointer border border-slate-200"
                  ></div>
                );
              })
            : null}

          <img
            onClick={onChangeColor}
            src={add}
            className="w-8 cursor-pointer"
          />
          {showColor === true ? (
            <CompactPicker onChangeComplete={handelChangeComplete} />
          ) : null}
        </div>
        <div className="flex justify-end w-full mb-4">
          <button
            onClick={handelSubmit}
            className="duration-500 text-white hover:text-[#555550] bg-black mt-4 py-3 px-6 rounded-lg"
          >
            حفظ التعديلات
          </button>
        </div>
        <ToastContainer position="top-center" theme="dark" rtl />
      </div>
    </div>
  );
};

export default AdminEditProducts;

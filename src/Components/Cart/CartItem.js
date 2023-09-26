import React from "react";
import mobile from "../../images/mobile.png";
import DeleteCartHook from "../../customHook/cart/DeleteCartHook";
import { Modal } from "react-bootstrap";
import UpdateCartHook from "../../customHook/cart/UpdateCartHook";

const CartItem = ({ item }) => {
  const [handelDeleteCart, show, handelClose, handelShow, handelDeleteItem] = DeleteCartHook(item);
  const [itemCount, onChangeCount, handelUpdateCart] = UpdateCartHook(item);
  return (
    <div className="grid grid-cols-12 px-2 mb-3 bg-white rounded-2xl">
      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={show}
        onHide={handelClose}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-red-600 font-bold text-xl ">تأكيد الحذف</div>
          <div className="font">هل أنت متأكد من عملية الحذف</div>
          <div className="flex justify-end gap-2">
            <button
              className="p-2 bg-blue-600 rounded hover:bg-blue-900 text-white"
              onClick={handelClose}
            >
              تراجع
            </button>
            <button
              className="p-2 bg-red-600 rounded hover:bg-red-900 text-white"
              onClick={handelDeleteItem}
            >
              حذف
            </button>
          </div>
        </div>
      </Modal>
      <img
        src={item.product.imageCover || mobile}
        className="w-36 h-36 col-span-3 max-lg:col-span-3 max-sm:col-span-4 cursor-pointer m-auto"
      />
      <div className="col-span-9 max-lg:col-span-9 max-sm:col-span-8 pb-5">
        <div className="between pt-2 mb-5">
          <div className="text-xs gray font-semibold">
            {item.product.category.name || "بلا تصنيف"}
          </div>
          <div
            onClick={handelShow}
            className="flex items-center cursor-pointer"
          >
            <i class="fa-regular fa-trash-can"></i>
            <span className="text-xs gray mr-2">إزالة</span>
          </div>
        </div>
        <div className="flex gap-2 ">
          <span className="text-sm text-[#555550] ml-2">
            {item.product.title || ""}
          </span>
          <span className="text-[#ffc107] text-sm font-bold">
            {item.product.ratingsAverage || 0}
          </span>
        </div>
        <div className="my-1">
          <span className="gray text-xs font-semibold mb-2 ml-1">
            الماركة :
          </span>
          <span className="text-[#555550] text-lg font-semibold">
            {item.product.brand.name || "لا توجد"}
          </span>
        </div>
        {item.color === "" ? null : (
          <div
            style={{ backgroundColor: `${item.color}` }}
            className="w-8 h-8 rounded-full cursor-pointer border"
          ></div>
        )}

        <div className="between">
          <div className="my-2 flex items-center">
            <span className="gray text-xs font-semibold ml-1">الكمية</span>
            <input
              value={itemCount}
              onChange={onChangeCount}
              type="number"
              className="w-10 h-6 border border-[#979797] rounded-sm text-center"
            />
            <button
              onClick={handelUpdateCart}
              className="mr-3 bg-black px-3 py-2 text-white hover:gray duration-500 rounded-lg text-sm"
            >
              تطبيق
            </button>
          </div>
          <div className="text-[#555550] font-semibold text-lg">
            {item.price || 0} $
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

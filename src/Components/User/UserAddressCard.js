import React from "react";
import { Link } from "react-router-dom";
import DeleteAddressHook from "../../customHook/user/DeleteAddressHook";
import { Modal } from "react-bootstrap";

const UserAddressCard = ({ item }) => {
  const [show, handelClose, handelShow, handelDelete] = DeleteAddressHook(
    item._id
  );
  return (
    <div className="bg-white shadow rounded-lg pt-2 pb-4 px-3 mb-4">
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
              onClick={handelDelete}
            >
              حذف
            </button>
          </div>
        </div>
      </Modal>
      <div className="between mb-4">
        <div>{item.alias}</div>
        <div className="flex">
          <Link to={`/user/edit-address/${item._id}`}>
            <div>
              <i class="fa-solid fa-pen"></i>
              <span className="text-sm gray mx-2">تعديل</span>
            </div>
          </Link>
          <div onClick={handelShow} className="cursor-pointer">
            <i class="fa-regular fa-trash-can"></i>
            <span className="text-sm gray mr-2">إزالة</span>
          </div>
        </div>
      </div>
      <div className="text-sm mb-4">{item.details}</div>
      <div className="flex gap-2 mb-2">
        <p className="text-[#555550]">رقم الهاتف:</p>
        <span className="gray">{item.phone}</span>
      </div>
    </div>
  );
};

export default UserAddressCard;

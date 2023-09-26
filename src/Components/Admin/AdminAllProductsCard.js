import React, { useState } from "react";
import { Link } from "react-router-dom";
import rate from "../../images/rate.png";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
import { Modal } from "react-bootstrap";

const AdminAllProductsCard = ({ Item }) => {
  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const dispatch = useDispatch();

  const handelDelete = async () => {
    await dispatch(deleteProducts(Item._id));
    setShow(false);
    window.location.reload();
  };
  return (
    <div className="rounded-lg bg-white shadow">
      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={show}
        onHide={handelClose}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-red-600 font-bold text-xl ">تأكيد الحذف</div>
          <div className="font">هل أنت متأكد من عملية الحذف للمنتج</div>
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

      <div className="between px-2 py-1 gray">
        <span onClick={handelShow} className="cursor-pointer">
          إزالة
        </span>
        <Link to={`/admin/editproduct/${Item._id}`}>
          <span>تعديل</span>
        </Link>
      </div>
      <Link to={`/products/${Item._id}`}>
        <img src={Item.imageCover} className="w-full h-56" />
      </Link>
      <div className="p-3">
        <p className="text-[#555550] text-sm mb-2">{Item.title}</p>
        <div className="between">
          <div className="flex gap-2">
            <img src={rate} className="w-4 h-4" />
            <span className="text-[#ffc107] text-sm font-bold">
              {Item.ratingsQuantity}
            </span>
          </div>
          <div className="font-bold text-sm">{Item.price} شيكل</div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProductsCard;

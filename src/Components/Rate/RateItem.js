import React, { useState } from "react";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/editt.png";
import { Modal } from "react-bootstrap";
import DeleteRateHook from "../../customHook/review/DeleteRateHook";
import { ToastContainer } from "react-toastify";
import EditRateHook from "../../customHook/review/EditRateHook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ review }) => {
  const [isUser, showDelete, handelClose, handelShow, handelDelete] =
    DeleteRateHook(review);
  const [
    showEdit,
    handelCloseEdit,
    handelEdit,
    handelShowEdit,
    onChangeRateText,
    newRateText,
    onChangeRateValue,
    newRateValue,
  ] = EditRateHook(review);

  const setting = {
    size: 20,
    count: 5,
    color: "gray",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateValue(newValue);
    },
  };

  return (
    <div>
      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={showDelete}
        onHide={handelClose}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-red-600 font-bold text-xl ">تأكيد الحذف</div>
          <div className="font">هل أنت متأكد من حذف التقييم</div>
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

      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={showEdit}
        onHide={handelCloseEdit}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-red-600 font-bold text-xl ">تعديل التقييم</div>
          <div>
            <ReactStars {...setting} />
            <input
              value={newRateText}
              onChange={onChangeRateText}
              type="text"
              className="w-full outline-none bg-slate-50 p-1"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="p-2 bg-blue-600 rounded hover:bg-blue-900 text-white"
              onClick={handelCloseEdit}
            >
              تراجع
            </button>
            <button
              className="p-2 bg-red-600 rounded hover:bg-red-900 text-white"
              onClick={handelEdit}
            >
              تعديل
            </button>
          </div>
        </div>
      </Modal>

      <div className="flex items-center gap-[6px] pt-4 mx-10">
        <div className="font-semibold text-base text-[#555550]">
          {review.user.name}
        </div>
        <img src={rate} className="w-4 h-4" />
        <span className="text-[#ffc107] text-sm font-semibold">
          {review.rating}
        </span>
      </div>
      <div className="border-b mt-1 between">
        <div className="text-sm pb-2 mx-10 text-[#555550]">{review.review}</div>
        {isUser === true ? (
          <div className="flex mx-10 gap-1">
            <img
              src={deleteicon}
              onClick={handelShow}
              width="20px"
              height="20px"
              className="cursor-pointer"
              alt="delete"
            />
            <img
              src={editicon}
              onClick={handelShowEdit}
              width="20px"
              height="20px"
              className="cursor-pointer"
              alt="edit"
            />
          </div>
        ) : null}
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default RateItem;

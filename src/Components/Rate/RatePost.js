import React from "react";
import ReactStars from "react-rating-stars-component";
import AddRateHook from "../../customHook/review/AddRateHook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const RatePost = () => {
  const { id } = useParams();
  const [rateText, rateValue, onChangeRateText, onChangeRateValue, user, onSubmit] =
    AddRateHook(id);
  // console.log(user);
  // console.log(user.name);
  // Validate
  var name = "";
  if (user) name = user.name;
  const setting = {
    size: 20,
    count: 5,
    color: "gray",
    activeColor: "#ffc107",
    value: 7.5,
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
    <div className="mt-5 pb-2">
      <div className="flex items-center gap-4 mx-10">
        <p className="text-[#555550] text-sm font-bold">{name}</p>
        <ReactStars {...setting} />
      </div>
      <div className="mx-10">
        <textarea
          value={rateText}
          onChange={onChangeRateText}
          cols="20"
          rows="3"
          placeholder="اكتب تعليقك..."
          className="w-full bg-[#f9f9f9] rounded-lg p-2 border border-[#979797] mt-3"
        ></textarea>
      </div>
      <div className="border-b pb-2 flex justify-end">
        <div onClick={onSubmit} className="text-white hover:gray mx-10 bg-black border-[#979797] duration-500 cursor-pointer px-5 py-3 rounded-lg text-sm">
          أضف تعليق
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default RatePost;

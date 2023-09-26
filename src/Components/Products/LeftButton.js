import React from "react";

const LeftButton = (onClick, onDisable) => {
  return (
    <i
      className="fa-solid fa-chevron-left float-left mt-24 cursor-pointer w-8 h-8 bg-slate-100 rounded-full center"
      onClick={onClick}
      onDisable={onDisable}
    ></i>
  );
};

export default LeftButton;

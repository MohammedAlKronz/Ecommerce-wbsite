import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="containerXl py-6 between">
      <p className="font-bold text-xl">{title}</p>
      {btntitle ? (
        <Link
          to={`${pathText}`}
          className="border border-black rounded-xl px-6 py-1  duration-300 hover:bg-black hover:text-white">
          {btntitle}
          </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;

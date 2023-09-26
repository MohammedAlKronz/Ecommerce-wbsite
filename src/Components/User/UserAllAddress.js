import React from "react";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";
import ViewAddressesHook from "../../customHook/user/ViewAddressesHook";

const UserAllAddress = () => {
  const [res] = ViewAddressesHook();
  // if (res.data) console.log(res);
  return (
    <div>
      <div className="font-extrabold text-[22px] text-[#555550] mb-6">
        دفتر العناوين
      </div>
      {res.data ? (
        res.data.map((item, index) => {
          return <UserAddressCard key={index} item={item} />;
        })
      ) : (
        <h1>لا يوجد عناوين حتى الآن</h1>
      )}
      <Link to="/user/add-address" className="flex justify-center">
        <button className="duration-500 text-white hover:text-[#555550] bg-black p-3 rounded-lg">
          إضافة عنوان جديد
        </button>
      </Link>
    </div>
  );
};

export default UserAllAddress;

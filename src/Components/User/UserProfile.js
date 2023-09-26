import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileHook from "../../customHook/user/ProfileHook";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [
    user,
    show,
    handelClose,
    handelShow,
    handelEdit,
    name,
    phone,
    email,
    onChangeName,
    onChangePhone,
    onChangeEmail,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
    changePassword,
  ] = ProfileHook();

  return (
    <div className="grid grid-cols-12">
      <Modal
        className="fixed font-['Almarai'] bg-black inset-0 bg-opacity-30 backdrop-blur-sm"
        show={show}
        onHide={handelClose}
        dir="rtl"
      >
        <div className="bg-white w-[400px] rounded space-y-4 p-4 absolute top-20 left-1/2 -translate-x-1/2">
          <div className="text-red-600 font-bold text-xl">
            تعديل البيانات الشخصية
          </div>
          <div className="font">
            <input
              value={name}
              onChange={onChangeName}
              type="text"
              placeholder="اسم المستخدم"
              className="p-[5px] w-full bg-gray-100 border border-gray-400 rounded-lg mb-4"
            />
            <input
              value={phone}
              onChange={onChangePhone}
              type="number"
              placeholder="رقم الهاتف"
              className="p-[5px] w-full bg-gray-100 border border-gray-400 rounded-lg mb-4"
            />
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="الايميل"
              className="p-[5px] w-full bg-gray-100 border border-gray-400 rounded-lg mb-4"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="p-2 bg-blue-600 rounded hover:bg-blue-900 text-white"
              onClick={handelClose}
            >
              تراجع
            </button>
            <button
              className="p-2 bg-red-600 rounded hover:bg-red-900 text-white"
              onClick={handelEdit}
            >
              حفظ التعديل
            </button>
          </div>
        </div>
      </Modal>
      <div className="font-extrabold text-[22px] text-[#555550] mb-5 col-span-12">
        الصفحة الشخصية
      </div>
      <div className="bg-white rounded-lg shadow mb-5 col-span-12">
        <div className="py-2 px-3">
          <div className="between">
            <div className="flex gap-2">
              <p className="text-[#555550]">الاسم:</p>
              <span className="gray">{user.name}</span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handelShow}
            >
              <i class="fa-solid fa-pen"></i>
              <span className="gray mx-2">تعديل</span>
            </div>
          </div>
          <div className="flex gap-2 my-5">
            <p className="text-[#555550]">رقم الهاتف:</p>
            <span className="gray">{user.phone}</span>
          </div>
          <div className="flex gap-2 my-5">
            <p className="text-[#555550]">الايميل:</p>
            <span className="gray">{user.email}</span>
          </div>
        </div>
      </div>
      <div className="font-extrabold text-[22px] text-[#555550] mb-3 col-span-12">
        تغيير كلمة المرور
      </div>
      <div className="flex flex-col max-sm:col-span-12 sm:col-span-10 md:col-span-6">
        <input
          value={oldPassword}
          onChange={onChangeOldPass}
          type="password"
          placeholder="أدخل كلمة المرور القديمة"
          className="mb-4 bg-gray-100 border border-gray-400 p-2 rounded-lg"
        />
        <input
          value={newPassword}
          onChange={onChangeNewPass}
          type="password"
          placeholder="أدخل كلمة المرور الجديدة"
          className="mb-4 bg-gray-100 border border-gray-400 p-2 rounded-lg"
        />
        <input
          value={confirmNewPassword}
          onChange={onChangeConfirmPass}
          type="password"
          placeholder="تأكيد كلمة المرور الجديدة"
          className="mb-4 bg-gray-100 border border-gray-400 p-2 rounded-lg"
        />
        <div className="flex justify-end">
          <button
            onClick={changePassword}
            className="duration-500 text-white hover:text-[#555550] bg-black py-2 px-4 rounded-lg"
          >
            حفظ كلمة السر
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default UserProfile;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress } from "../../redux/actions/userAddressesAction";

const DeleteAddressHook = (id) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const handelDelete = async () => {
    await dispatch(deleteUserAddress(id));
    setShow(false);
    window.location.reload(false);
  };

  return [show, handelClose, handelShow, handelDelete];
};

export default DeleteAddressHook;

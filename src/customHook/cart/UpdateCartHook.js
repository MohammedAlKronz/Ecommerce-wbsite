import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../redux/actions/cartAction";

const UpdateCartHook = (item) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChangeCount = (e) => {
    setItemCount(e.target.value);
    // console.log(itemCount)
  };

  useEffect(() => {
    if (item) {
    //   console.log(item);
      setItemCount(item.count);
    }
  }, []);

  const res = useSelector((state) => state.cartReducer.updateItem);

  const handelUpdateCart = async () => {
    setLoading(true)
    await dispatch(updateCartItem(item._id), {
        count: itemCount,
    });
    setLoading(false)
  };

  useEffect(() => {
    if(loading === false){
    if (res) {
      console.log(res);
    }}
  }, [loading]);

  return [itemCount, onChangeCount, handelUpdateCart];
};

export default UpdateCartHook;

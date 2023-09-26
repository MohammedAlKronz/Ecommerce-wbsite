import React, { useState, useEffect } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotification";
import { createBrand } from './../../redux/actions/brandAction';

const AddBrandHook = () => {
  const dispatch = useDispatch();
  // عندي هان الصورة ثابتة انا بدي اخليها متغيرة بحيث لما اضيف صورة اللي يظهر هو الصورة اللي ضفتها.
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  // To change name state 
  const onChangeName = (event) => {
    event.persist(); // Used with inputText in the event of a name change
    setName(event.target.value)
  } 

  // Method used when the user selects an image.
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allBrand.brand);

  // Save data in database
  const handelSubmit = async (event) => {
    event.preventDefault(); // browser not reload

    if (name === "" || selectedFile === null) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      console.log("Finish");
      setLoading(true); // عشان العملية اللي بعدها
      setTimeout(() => setIsPress(false), 1000);

      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكلة في عملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName];
};

export default AddBrandHook;

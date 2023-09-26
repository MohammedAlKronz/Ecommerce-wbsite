import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import notify from "./../../customHook/useNotification";
import { createSubCategory } from "./../../redux/actions/subcategoryAction";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  // Get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  // if (category) console.log(category.data)

  // Get last sub category state from redux
  const subcategory = useSelector((state) => state.subCategory.subcategory); // response sorted by in subcategory

  // On change dropdown menu.
  const handelChange = (e) => {
    // console.log(e.target.value);
    setId(e.target.value);
  };

  // To save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // On save data.
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }
    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }

    if (name === "") {
      notify("من فضلك أدخل اسم التصنيف", "warn");
      return;
    }

    setLoading(true); // قبل ما ابلش ابعت الداتا بأقله انه لسا ما زال بيحمل
    await dispatch(
      createSubCategory({
        // from postman
        name: name, // name from data in postman = name in useState.
        category: id, // category from data in postman = id in useState.
      })
    );
    setLoading(false); // لما أخلص ارسال الداتا بأقله انها فولس
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subcategory) console.log(subcategory); // response
      if (subcategory.status === 201) {
        notify("تمت الإضافة بنجاح", "success");
      } else if (
        subcategory === "Error AxiosError: Request failed with status code 400"
      ) {
        notify("الاسم مكرر، من فضلك أدخل اسم آخر", "warn");
      } else {
        notify("هناك مشكلة في عملية الإضافة", "warn");
      }
      setLoading(true);
    }
  }, [loading]);
  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handelChange,
    handelSubmit,
    onChangeName,
  ];
};

export default AddSubCategoryHook;

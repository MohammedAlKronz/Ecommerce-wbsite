import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandAction";
import { getOneCategory } from "./../../redux/actions/subcategoryAction";
import {
  getAllProducts,
  getOneProduct,
  updateProducts,
} from "../../redux/actions/productsAction";
import notify from "./../../customHook/useNotification";

const EditProductsHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id)); // بدي اجيب تفاصيل المنتج من الاي دي
      await dispatch(getAllCategory()); // بمجرد ما يتم تحميل الصفحة بدي اسوي ديسباتش على كل التصنيفات يعني اخليهم يظهروا
      await dispatch(getAllBrand());
      await dispatch(getAllProducts());
    };
    run();
  }, []);

  // Get one product details
  const item = useSelector((state) => state.allProducts.oneProduct);

  // عشان أوصل للداتا من الريدكس
  const category = useSelector((state) => state.allCategory.category);
  // if (category) console.log(category.data);

  const brand = useSelector((state) => state.allBrand.brand);

  const subCat = useSelector((state) => state.subCategory.subcategory);

  // Get last loading state from redux
  const download = useSelector((state) => state.allProducts.loading);

  const onSelect = (selectedList) => {
    // console.log(selectedSubID);
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    // console.log(selectedSubID);
    setSelectedSubID(selectedList);
  };
  const [options, setOptions] = useState([]);

  // Values images products
  const [images, setImages] = useState([]);
  // console.log(images);

  // Values state || There is lib named "useForm" to reduce number of useStates.
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catID, setCatID] = useState("");
  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [brandID, setBrandID] = useState("");
  const [loading, setLoading] = useState(true);

  // ما بنفع استخدم ال async - awite مع ال useEffect || لهيك راح استخدم ميثود واستدعيها (run)

  useEffect(() => {
    try {
      
      if (item.data) {
        setImages(item.data.images);
        setProdName(item.data.title);
        setProdDescription(item.data.description);
        setPriceBefore(item.data.price);
        // setPriceAfter(item.data.);
        setQty(item.data.quantity);
        setCatID(item.data.category);
        setBrandID(item.data.brand);
        setColors(item.data.availableColors);
      }
    } catch (error) {
      
    }
  }, [item]);

  // To change name product
  const onChangeProdName = (event) => {
    event.persist(); // Used with inputText in the event of a name change
    setProdName(event.target.value);
  };

  const onChangeProdDescription = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };

  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };

  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };

  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };

  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  // To show hide ColorPicker
  const [showColor, setShowColor] = useState(false);
  // To store all pick color
  const [colors, setColors] = useState([]);
  // لما استخدم اللون تقفل القائمة || الميثود هاي تلقائيا بترجعلي اللون اللي اخترته وبتخزلني اياه كمتغير انا سميته كلر
  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]); // setColors(القيمة القديمة يعني الالوان المختارة مسبقا, الألوان اللي حأختارها);
    setShowColor(!showColor);
  };
  // console.log(colors);

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color); // يعني رجعلي كل اللي فالاريي ماعدا اللي العنصر اللي حتلف عليه ميكونش يشبه اللون الي راجعلي
    setColors(newColor);
  };

  // When select category store id.
  // 1. لما اغير التصنيف الرئيسي
  const onSelectCategory = async (e) => {
    // بيحصل ريرندر للكومبوننت قبل ما يوصل لسيت كات ايدي فبالتالي قيمة الاي دي ما بتلحق تتغير بتضل ثابتة زي ما هي وما بقدر اغيرها
    // لاننا في ال JSX قلنا خلي value={catID} فحيضل ثابت على الحاجة الاولانية
    // if (e.target.value != 0) {
    //   await dispatch(getOneCategory(e.target.value));
    // }
    setCatID(e.target.value);
  };

  // تتنفذ كل ما الايدي يتغير يعني كل ما اختار تصنيف رئيسي
  // 2. حيجيب التصنيفات الفرعية تعت التصنيف الرئيسي
  useEffect(() => {
    if (catID != 0) {
      const runCat = async () => {
        await dispatch(getOneCategory(catID));
      };
      runCat();
      //   if (subCat.data) {
      //     setOptions(subCat.data);
      //   }
    }
  }, [catID]);

  // 3. حيملى التصنيفات الفرعية فالأوبشن
  useEffect(() => {
    if (subCat.data) {
      setOptions(subCat.data);
    }
  }, [subCat]);

  // console.log(catID);

  // When select brand store id.
  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };
  // console.log(brandID);

  // حيصير عندي مشكلة والبيانات ممكن ما تنبعت والمشكلة في الصورة حتكون بيز 64 لازم نحولها ل فايل
  // To convert base64 image to file.
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // To Convert URL to File
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  // To save data
  const handelSubmit = async (e) => {
    console.log("handel");
    e.preventDefault(); // Browser not reload
    if (
      catID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0 ||
      priceAfter <= 0 ||
      qty === 0 ||
      selectedSubID === 0
    ) {
      notify("من فضلك أكمل البيانات", "warn");
      return;
    } else if (priceAfter >= priceBefore) {
      notify("هناك مشكلة في السعر، يجب أن يكون السعر بعد الخصم أقل", "warn");
      return;
    }

    // Method(1)
    // console.log(images[0]);
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    // عند تعديل الصور هم اصلا بكونوا جاييني من الباك اند او من الداتابيز .. فلما اخليهم او اشيل وحدة او اشي زي هيك بيعطيني ايرور لانه انا محولهم لصيغة بنج
    // base64 لما انا اختار الصور بنفسي بتكون على شكل
    // URL لما يكونوا جاياتني من الباك اند بكونوا على شكل
    // URL to Base64 && Base64 to file
    // 1. console.log(images[0].length); ==> <=1000 letter => URL & >1000 letter => Base64.
    // Base64 من الاخر الصور لازم يكونوا

    // Convert base64 image to file
    // const imgCover = dataURLtoFile(images[0], Math.random() + ".png"); // الاسم يكون عشوائي بامتداد ثابت

    // بدي اعمل اريي تبدأ من صفر وتنتهي عند رقم معين
    // 0 to images.length
    let itemImages = [];
    // Convert array of base64 image to file || from URL to File
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val)); // val = file
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", catID);
    formData.append("brand", brandID);

    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);

    // formData طريقة ارسال الاريي في
    colors.map((color) => formData.append("availableColors", color));
    // بتحتوي على أكتر من خيار انا محتاج منهم فقط الايدي
    selectedSubID.map((item) => formData.append("subcategory", item._id));

    // To test
    // console.log(prodName);
    // console.log(prodDescription);
    // console.log(qty);
    // console.log(priceBefore);
    // console.log(imgCover);
    // console.log(catID);

    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
  };

  // Get create message
  const product = useSelector((state) => state.allProducts.updateProducts);

  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setSelectedSubID(0);
      setTimeout(() => setLoading(true), 1500);
      if (product) {
        if (product.status === 200) {
          notify("تمت التعديل بنجاح", "success");
        } else {
          notify("هناك مشكلة في عملية التعديل", "error");
        }
      }
    }
  }, [loading]);
  return [
    category,
    brand,
    onSelect,
    onRemove,
    options,
    images,
    prodName,
    prodDescription,
    priceBefore,
    priceAfter,
    qty,
    loading,
    showColor,
    colors,
    catID,
    brandID,
    removeColor,
    onSelectCategory,
    onSelectBrand,
    handelSubmit,
    setImages,
    handelChangeComplete,
    onChangeProdName,
    onChangeProdDescription,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onChangeColor,
    download,
  ];
};

export default EditProductsHook;

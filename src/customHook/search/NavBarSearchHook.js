import React, { useState, useEffect } from "react";
import ViewSearchProductsHook from "../products/ViewSearchProductsHook";

const NavBarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState("");

  // When user type search word.
  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    // لما اعمل ريلود اللي فالبحث ما يروح
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);

    // هاي مشكلتها انها بتعمل ريلود وهاي حركة مش حلوة كل ما ابحث يضل يسوي ريلود
    // لو دخلنا النافبار جوا الرياكت راوتر دوم بيبطل يسوي ريلود
    const path = window.location.pathname;
    if (path != "/products") {
      window.location.pathname = "/products";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);

  let word = "";
  try {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
  } catch (error) {}

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handler = () => {};

  // console.log(user);  // لما اطبع اليوزر حييجيني عشكل اريي فيها اسمه ورقمه وكمان اشياء ثانية + هل هو يوزر ولا ادمن

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Function to handle click outside of the component
    const handleClickOutside = (event) => {
      if (show && !event.target.closest(".navbar-login-container")) {
        //closest يعني اذا ضغطت على اي حدا من الدف او اللي جوا الدف اللي فيه كلاس نافبار لوقن كونتينر راح بفحص اذا اله ابو او جد او جد جد او من سلالته كلاس او اي دي اسمه نافبار لوقن كونتينر راح يعتبره منه
        setShow(false);
      }
    };

    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return [onChangeSearch, word, user, handler, logOut, show, setShow];
};

export default NavBarSearchHook;

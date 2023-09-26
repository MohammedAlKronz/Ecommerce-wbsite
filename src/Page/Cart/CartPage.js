import React from "react";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import GetAllUserCartHook from "../../customHook/cart/GetAllUserCartHook";
// style={{minHeight:"670px"}} == h-screen ==> عشان الفوتر ينزل تحت وتتزبط الصفحة

const CartPage = () => {
  const [itemsNum, cartItems, totalCartPrice] = GetAllUserCartHook();
  console.log(cartItems);
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl max-sm:px-6 mb-4"
    >
      <div className="mt-6 mb-2 font-extrabold text-xl text-[#555550]">
        عربة التسوق
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 max-sm:col-span-12 max-md:col-span-8">
          {cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })
          ) : (
            <h1 className="text-xl font-extrabold text-center mt-10">لا يوجد منتجات في العربة</h1>
          )}
        </div>
        <div className="col-span-3 max-sm:col-span-12 max-md:col-span-4">
          <CartCheckout totalCartPrice={totalCartPrice} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

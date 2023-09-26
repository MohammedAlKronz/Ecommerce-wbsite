import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "../../redux/actions/wishListAction";
import CardProductsContainer from "../Products/CardProductsContainer";

const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.addToWishListReducer.allWishList);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        setItems(res.data);
      }
    }
  }, [loading]);
  return (
    <div>
      <div className="font-extrabold text-[22px] text-[#555550] mb-5">
        قائمة المفضلة
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length <= 0 ? (
          <h1 className="text-xl font-bold col-span-12 text-center gray mt-10">
            لا يوجد منتجات مفضلة حالياً
          </h1>
        ) : (
          <CardProductsContainer products={items} title="" btntitle="" />
        )}
      </div>
    </div>
  );
};

export default UserFavoriteProduct;

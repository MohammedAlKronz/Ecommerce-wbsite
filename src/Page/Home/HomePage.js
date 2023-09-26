import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Discount from "../../Components/Home/Discount";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../customHook/products/ViewHomeProductsHook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        products={items}
        title="الأكثر مبيعاً"
        btntitle="المزيد"
        pathText="/products"
      />
      <Discount />
      <CardProductsContainer
        products={items}
        title="أحدث الأزياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="أشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;

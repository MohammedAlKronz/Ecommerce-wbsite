import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../customHook/products/ViewProductDetailsHook";

// بدي اتحكم فتفاصيل كل منتج على حدى عن طريق الايدي تبع المنتج
// وهيك بقدر عن طريق الهوك اللي اسمها يوز برمس اجيب البراميتر الي فاليوارال بتاعي وبناء عليه بجيب تفاصيل المنتج
const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
  if (prod) var items = prod.slice(0, 4); // عشان اقدر اغير القيمة
  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }
  return (
    <div className="lg:max-[1110px]:px-6 min-h-[1000px]">
      <CategoryHeader />
      <div className="max-md:px-6 max-sm:px-6">
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <div className="mb-6">
          <CardProductsContainer products={items} title="منتجات قد تعجبك" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetalisPage;

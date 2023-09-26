import React from "react";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div className="containerXl grid grid-cols-12 gap-8 py-4">
      <div className="lg:col-span-3 col-span-12">
        <ProductGallery />
      </div>
      <div className="lg:col-span-8 col-span-12 relative">
        <ProductText />
      </div>
    </div>
  );
};

export default ProductDetails;

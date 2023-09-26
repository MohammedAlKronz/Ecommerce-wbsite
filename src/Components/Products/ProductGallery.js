import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../customHook/products/ViewProductDetailsHook";

// فيه مشكلة هان تنساهاش .. كل ما بتتغير الصورة الايقونة بتتحرك عن مكانها
/*
  ProductDetalisPage الايدي هاد موجود في 
  والبرودكت ديتيلز موجودة جواها وجوا موجود كمان التكست والجلاري 
  يبقى كلهم موجودين على نفس الراوتس 
  فمن جوا الجلاري بقدر اوصل مباشرة للاي دي 
*/

const ProductGallery = () => {
  const { id } = useParams(); // Destructing
  // console.log(id);

  const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
  // console.log(item.images);

  // لازم كل الصور يكونوا نفس القياس طول وعرض
  return (
    <div className="center">
      <div className="bg-white rounded-3xl center h-[450px] w-[330px]">
        <ImageGallery
          items={images}
          defualtImage={mobile}
          showFullscreenButton={false}
          isRTL={true}
          showPlayButton={false}
          showThumbnails={false}
          renderRightNav={RightButton}
          renderLeftNav={LeftButton}
        />
      </div>
    </div>
  );
};

export default ProductGallery;

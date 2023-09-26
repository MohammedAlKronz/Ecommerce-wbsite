import React, { useState, useEffect } from "react";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider4.png";
import slider3 from "../../images/prod3.png";
import Slide from "react-reveal/Slide";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slider1, slider2, slider3];
  const backgroundColors = ["bg-pink-200", "bg-green-200", "bg-yellow-200"];

  const previousImage = () => {
    const newIndex = (currentImageIndex + 3 - 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <Slide left>
      <div
        className={`flex gap-x-4 justify-around items-center ${backgroundColors[currentImageIndex]} relative`}>
        <div className="w-10 h-full cursor-pointer" onClick={nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
            />
          </svg>
        </div>
        <div className="flex gap-x-4 justify-center items-center max-md:flex-col max-md:text-center max-md:gap-y-4 max-md:my-4">
          <img src={images[currentImageIndex]} alt="" className="h-72" />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl text-pink-500 mb-2">هناك خصم كبير</h2>
            <h1 className="text-3xl font-bold text-pink-500">
              خصم يصل ٥٠٪ عند شرائك
            </h1>
          </div>
        </div>
        <div className="w-10 h-full cursor-pointer" onClick={previousImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"
            />
          </svg>
        </div>
      </div>
    </Slide>
  );
};

export default Slider;

// images.length => عشان ما يزيد اكتر من 3 يضله 0و1و2
// return () => clearInterval(interval); => عشان ما يصير تداخل في الزمن بين السلايدرات

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-5">
        <div className="containerXl between max-sm:flex-col max-sm:gap-y-4">
            <div className="flex gray text-[13px] font-semibold gap-4">
                <a href="">الشروط والأحكام</a>
                <a href="">سياسة الخصوصية</a>
                <a href="">اتصل بنا</a>
            </div>
            <div className="flex items-center gap-2 gray text-[13px]">
             <span className="font-semibold">
                <i className="fa-solid fa-phone mx-1"></i>
                00972599444649
             </span>
             <a href=""><i class="fa-brands fa-facebook-f"></i></a>
             <a href=""><i class="fa-brands fa-instagram"></i></a>
             <a href=""><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer;

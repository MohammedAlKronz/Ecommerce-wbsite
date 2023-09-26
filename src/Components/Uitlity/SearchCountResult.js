import React from "react";
import UnopDropdown from "unop-react-dropdown";
// <i class="fa-solid fa-arrow-down-wide-short"></i>

const SearchCountResult = ({ title, onClick }) => {
    const handler = () => {}
    const clickMe = (key) => {
      localStorage.setItem("sortType", key);
      // console.log(key);
      onClick();
    }
  return (
    <div className="containerXl flex justify-between pt-5 lg:max-[1100px]:px-6 md:max-[992px]:px-6 max-sm:px-6">
      <div className="font-bold text-xl">{title}</div>
      <UnopDropdown 
        onAppear={handler}
        onDisappearStart={handler}
        trigger={
            <p className="gray mb-3">
                <i className="fa-solid fa-arrow-down-wide-short fa-lg ml-1"></i>
                ترتيب حسب 
            </p>
        }
        delay={0}
        align="CENTER"
        hover
        >
        <div className="bg-white rounded-lg py-4 px-2 shadow w-44 text-sm gray">
          <div onClick={() => clickMe("")} className="border-b p-3 hover:text-white hover:bg-zinc-900">بدون ترتيب</div>
          <div onClick={() => clickMe("الأكثر مبيعاً")} className="border-b p-3 hover:text-white hover:bg-zinc-900">الأكثر مبيعاً</div>
          <div onClick={() => clickMe("الأعلى تقييماً")} className="border-b p-3 hover:text-white hover:bg-zinc-900">الأعلى تقييماً</div>
          <div onClick={() => clickMe("السعر من الأعلى للأقل")} className="border-b p-3 hover:text-white hover:bg-zinc-900">السعر من الأعلى للأقل</div>
          <div onClick={() => clickMe("السعر من الأقل للأعلى")} className="p-3 hover:text-white hover:bg-zinc-900">السعر من الأقل للأعلى</div>
        </div>
      </UnopDropdown>
    </div>
  );
};

export default SearchCountResult;

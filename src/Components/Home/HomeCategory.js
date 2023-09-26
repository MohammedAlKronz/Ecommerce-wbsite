import React from "react";
import SubTitle from "../Uitlity/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../customHook/category/HomeCategoryHook";

const HomeCategory = () => {

  const [loading, category, colors] = HomeCategoryHook(); // بسمّع عشان اصل للوجيك بتاعي

  return (
    <div className="containerXl max-sm:px-6">
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <div className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h1 className="text-lg font-extrabold col-span-12 text-center gray">
              لا يوجد تصنيفات
            </h1>
          )
        ) : (
          <div className="col-span-12 m-auto h-8 w-8 animate-spin rounded-full border-4 border-black border-r-transparent"></div>
        )}
      </div>
    </div>
  );
};

export default HomeCategory;

/*
الي عملناه باختصار انه احنا عملنا ديسباتش في اليوز افكت للقيت اول كاتيجوري الي هي الاكشن الي بدي انفذها 
الي هي اني بدي افتش الداتا يعني اجيب الداتا كلها ثم اروح ابعتها للرديوسر لانه موجود فالستور (المخزن) واقدر أوصله
العملية بتتم فعليا جوا الاكشن ولكن النتيجة بتروح للرديوسر 
*/

/*
فيه مشكلة هان انه انا بدي اظهر فقط 6 عناصر فالصفحة الرئيسة 
لو الداتا الي راجعالي فيها اكتر من 6 عناصر حيصير مشكلة ولازم نحلها 
ممكن تقول لتاع الباك اند رجعلي 6 عناصر فقط وممكن انت تعملها عن طريق السلايس
*/

/*
طيب هلقيت اللون ثابت وتبع الباكند  مش مرجعلي الوان عشان اعمل مابق عليهم 
بدي اعمل حيلة بسيطة عن طريق الاريي واخزن فيها الالوان
وعشان يلف عالاريي ويكون كل لون مختلف بأحتاج الكي (اندكس) عشان يلفلي عالعناصر واحد واحد
*/

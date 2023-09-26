import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitlity/Pagination";
import AllCategoryPageHook from "../../customHook/category/AllCategoryPageHook";


const AllCategoryPage = () => {
  const [category, loading, pageNum, getPage] = AllCategoryPageHook(); // نفس الترتيب ونفس المسميات
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageNum > 1 ? (<Pagination pageCount={pageNum} onPress={getPage} />) : null
      }
    </div>
  );
};

export default AllCategoryPage;

/*
انا سويت فالكاتيقوري كونتينر فتش للداتا وهيك وحاسوي نفس الكلام للبجنيشن
وبما انهم الاثنين موجودين في الاوول كاتيقوري بيج 
باعمل الفتش بس هان وبعمل بروبس
*/

// category.paginationResult.numberOfPages ==> رقم الصفحة 
/*
numberOfPages ==> فيها ايرور
لانه هو بيبعت الخاصية قبل ما الداتا تحمل بكم ثانية فبسببلي مشكلة
let pageNum = 0;
  if (category.paginationResult) {
    pageNum = category.paginationResult.numberOfPages;
  }
*/ 

// const dispatch = useDispatch(); ==> مجرد ما كتبت هاي خلص الديسباتش حيعمل اكسس يعني وصول على كل الكومبونانت || عن طريق الستور والبروفايدر



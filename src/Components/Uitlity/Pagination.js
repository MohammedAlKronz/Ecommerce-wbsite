import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
    // console.log(data.selected + 1); // بتطبعلي رقم الصفحة -- عملت +1 لانه الترقم بيبدا من صفر ونا بدي اياه يبدا من 1
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"p-3 center mt-3"}
      pageClassName={"py-2 px-4 text-black border border-[#DDD] hover:text-white hover:bg-black my-5"}
      pageLinkClassName={"text-sm"}
      previousClassName={"py-2 px-4 text-black border border-[#DDD] hover:text-white hover:bg-black my-5 font-bold"}
      nextClassName={"py-2 px-4 text-black border border-[#DDD] hover:text-white hover:bg-black my-5 font-bold"}
      previousLinkClassName={"text-sm"}
      nextLinkClassName={"text-sm"}
      breakClassName={""}
      breakLinkClassName={"py-[11px] px-4 text-black border border-[#DDD] hover:text-white hover:bg-black my-5"}
      activeClassName={"border border-blue-400 bg-slate-300"}
    />
  );
};
export default Pagination;





















/*
<div className="p-7 flex justify-center">
//       <ul className="flex">
//         <li><a className="block px-3 py-1.5 text-base transition-all duration-300 rounded-lg border border-gray-300 text-black hover:bg-black hover:text-white" href="#!">السابق</a></li>
//         <li><a className="block px-3 py-1.5 text-base transition-all duration-300 rounded-lg border border-blue-500  text-black hover:bg-black hover:text-white" href="#!">{pageCount}</a></li>
//         <li><a onClick={handlePageClick} className="block px-3 py-1.5 text-base transition-all duration-300 rounded-lg border border-gray-300 text-black hover:bg-black hover:text-white" href="#!">2</a></li>
//         <li><a onClick={handlePageClick} className="block px-3 py-1.5 text-base transition-all duration-300 rounded-lg border border-gray-300 text-black hover:bg-black hover:text-white" href="#!">3</a></li>
//         <li><a className="block px-3 py-1.5 text-base transition-all duration-300 rounded-lg border border-gray-300 text-black hover:bg-black hover:text-white" href="#!">التالي</a></li>
//       </ul>
//     </div>

// OR 
<div class="center">
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5 font-bold">&laquo; Previous</a>
    <a href="#" class="py-2 px-4 text-white border border-blue-500 bg-[#555] my-5">1</a>
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5">2</a>
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5">...</a>
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5">9</a>
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5">10</a>
    <a href="#" class="py-2 px-4 text-[#555] border border-[#DDD] hover:text-white hover:bg-black my-5 font-bold">Next &raquo;</a>
  </div>
*/

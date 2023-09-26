import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitlity/Pagination";
import ViewProductAdminHook from "../../customHook/admin/ViewProductAdminHook";

const AdminAllProductsPage = () => {
  const [items, pagination, onPress] = ViewProductAdminHook();
  // if (items) console.log(items);
  if (pagination) var pageCount = pagination;
  else pageCount = 0;
  return (
    <div
      style={{ minHeight: "670px" }}
      className="containerXl grid grid-cols-12 gap-6 py-3 max-sm:px-3"
    >
      <div className="sm:col-span-3 max-sm:col-span-3 md:col-span-2">
        <AdminSideBar />
      </div>
      <div className="sm:col-span-9 max-sm:col-span-9 md:col-span-10">
        <AdminAllProducts products={items} />
        {
          pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />) : null
        }
      </div>
    </div>
  );
};

export default AdminAllProductsPage;

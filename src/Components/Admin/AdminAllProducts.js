import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="font-extrabold text-2xl text-[#555550] mb-4">
        إدارة جميع المنتجات
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products ? (
          products.map((item, index) => (
            <AdminAllProductsCard key={index} Item={item} />
          ))
        ) : (
          <h1>لا يوجد منتجات حتى الان</h1>
        )}
      </div>
    </div>
  );
};

export default AdminAllProducts;

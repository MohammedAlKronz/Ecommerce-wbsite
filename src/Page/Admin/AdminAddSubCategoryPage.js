import React from 'react'
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddSubCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }} className="containerXl grid grid-cols-12 gap-6 py-3 max-sm:px-3">
      <div className="sm:col-span-3 max-sm:col-span-3 md:col-span-2">
        <AdminSideBar />
      </div>
      <div className="sm:col-span-9 max-sm:col-span-9 md:col-span-10">
        <AdminAddSubCategory />
      </div>
    </div>
  )
}

export default AdminAddSubCategoryPage

import React from 'react'
import Pagination from '../../Components/Uitlity/Pagination'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllOeders from '../../Components/Admin/AdminAllOeders'

const AdminAllordersPage = () => {
  return (
    <div style={{ minHeight: "670px" }} className="containerXl grid grid-cols-12 gap-6 py-3 max-sm:px-3">
      <div className="sm:col-span-3 max-sm:col-span-3 md:col-span-2">
        <AdminSideBar />
      </div>
      <div className="sm:col-span-9 max-sm:col-span-9 md:col-span-10">
        <AdminAllOeders />
        <Pagination />
      </div>
    </div>
  )
}

export default AdminAllordersPage

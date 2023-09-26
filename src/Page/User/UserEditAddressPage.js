import React from 'react'
import UserEditAddress from '../../Components/User/UserEditAddress'
import UserSideBar from '../../Components/User/UserSideBar'

const UserEditAddressPage = () => {
  return (
    <div style={{ minHeight: "670px" }} className="containerXl grid grid-cols-12 gap-6 py-3 max-sm:px-3">
      <div className="sm:col-span-3 max-sm:col-span-3 md:col-span-2">
        <UserSideBar />
      </div>
      <div className="sm:col-span-9 max-sm:col-span-9 md:col-span-10">
        <UserEditAddress />
      </div>
    </div>
  )
}

export default UserEditAddressPage

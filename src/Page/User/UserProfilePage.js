import React from 'react'
import UserSideBar from '../../Components/User/UserSideBar'
import UserProfile from '../../Components/User/UserProfile'

const UserProfilePage = () => {
  return (
    <div style={{ minHeight: "670px" }} className="containerXl grid grid-cols-12 gap-6 py-3 max-sm:px-3">
      <div className="sm:col-span-3 max-sm:col-span-3 md:col-span-2">
        <UserSideBar />
      </div>
      <div className="sm:col-span-9 max-sm:col-span-9 md:col-span-10">
        <UserProfile />
      </div>
    </div>
  )
}

export default UserProfilePage

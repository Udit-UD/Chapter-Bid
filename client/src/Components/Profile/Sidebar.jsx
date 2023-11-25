import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = ({activePage}) => {
  const getDivStyle = (pageName) => {
    return activePage == pageName ? "bg-purple-600 font-bold text-white" : "";
  };
  return (
    <div className="w-1/5 h-banner bg-gray-50">
        
        <Link to="/profile">
          <div className={`h-16 rounded-xl cursor-pointer my-1  w-full flex justify-center items-center ${getDivStyle("profile")}`}>
            <span className='text-xl font-sans '>Profile</span>
          </div>
        </Link>
        <Link to = "/orderhistory">
          <div className={`h-16 rounded-xl cursor-pointer my-1 w-full flex justify-center items-center ${getDivStyle("orderhistory")}`}>
            <span className='text-xl font-sans '>Order History</span>
          </div>
        </Link>
        <Link to = "/wishlist">
          <div className={`h-16 rounded-xl cursor-pointer my-1 w-full flex justify-center items-center ${getDivStyle("wishlist")}`}>
            <span className='text-xl font-sans '>Wishlist</span>
          </div>
        </Link>
        <Link to = "/settings">
          <div className={`h-16 rounded-xl cursor-pointer my-1 w-full flex justify-center items-center ${getDivStyle("settings")}`}>
            <span className='text-xl font-sans '>Settings</span>
          </div>
        </Link>
        <Link to = "/login">
          <div className={`h-16 rounded-xl cursor-pointer my-1 w-full flex justify-center items-center ${getDivStyle("logout")}`}>
            <span className='text-xl font-sans '>Logout</span>
          </div>
        </Link>
    </div>
  )
}

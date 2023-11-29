import React, { useState } from 'react'
import Logo from "../../assets/Images/Logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserData } from "../../Features/Auth/authSlice";

export const ProdNav = () => {
  const userData = useSelector(selectUserData);
  return (
    <div>
        <div className='w-full h-20  flex items-center justify-between shadow-md '>
          <div className="ml-10">
            <span className='flex justify-center items-center'>
              <Link to="/home" className='flex justify-center items-center'>
                <img src={Logo} className='w-14 h-14'  alt="Logo" />
              <h2 className='font-bold text-xl'>ChapterBid</h2>
              </Link>
            </span>
          </div>

          <div className='flex w-1/3'>
            <form className='w-full'>   
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-600 focus:outline-none" placeholder="Search for another book" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>

          </div>

          <div className='mr-10'>

          {userData.isAuthenticated ? (
            <Link to="/profile">
            <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-purple-600 hover:bg-purple-700 text-white">
              Profile
            </button>
            </Link>
      ) : (
        <div className="flex">
          <Link to="/login">
            <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-purple-600 hover:bg-purple-700 text-white">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded w-28 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-purple-600 hover:bg-purple-700 text-white">
              Signup
            </button>
          </Link>
        </div>
      )}
          </div>
        </div>

    </div>
  )
}

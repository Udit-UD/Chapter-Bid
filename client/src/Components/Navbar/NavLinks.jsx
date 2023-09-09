import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return(
        <div className="flex justify-center">
        <div className=" mx-2 min-w-20 px-2 py-1 rounded-lg font-sans text-lg font-medium hover:scale-110 flex justify-center items-center hover:bg-login-trans ">
          <Link to="/home">Home</Link>
        </div>
        <div className=" mx-2 min-w-20 px-2 py-1 rounded-lg font-sans text-lg font-medium hover:scale-110 flex justify-center items-center hover:bg-login-trans ">
          <Link to="/">Upcoming</Link>
        </div>

        <div className=" mx-2 min-w-20 px-2 py-1 rounded-lg font-sans text-lg font-medium hover:scale-110 flex justify-center items-center hover:bg-login-trans ">
          <Link to="/">About Us</Link>
        </div>
        <div className=" mx-2 min-w-20 px-2 py-1 rounded-lg font-sans text-lg font-medium hover:scale-110 flex justify-center items-center hover:bg-login-trans ">
          <Link to="#">Contact Us</Link>
        </div>
      </div>
    )
}

export default NavLinks;
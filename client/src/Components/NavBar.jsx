import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="main-header absolute w-full h-16 flex justify-center items-center z-10 bg-black text-white bg-opacity-50 p-4">
        <div className="header-left-box flex">
          <Link to="home">
            <span className="header-items block w-32 text-center my-4 hover:text-sxl">Home</span>
          </Link>
          <Link to="trending">
            <span className="header-items block w-32 text-center my-4 hover:text-sxl">Trending</span>
          </Link>
        </div>

        <div className="header-center-box ">
          <Link to="/">
            <span className="logo block h-16 w-36  border-white border-2"></span>
          </Link>
        </div>

        <div className="header-right-box flex">
          <Link to="about">
            <span className="header-items block w-32 text-center my-4 hover:text-sxl">About Us</span>
          </Link>
          <Link to="contact">
            <span className="header-items block w-32 text-center my-4 hover:text-sxl">Contact Us</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

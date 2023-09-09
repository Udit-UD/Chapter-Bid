import {React, useState} from "react";
import Logo from "../../assets/Images/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <div className="absolute z-10 flex  px-14 items-center bg-login-trans w-full h-16 shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-12 w-12" />
      </div>
      <NavLinks />
      <div className="flex flex-grow"></div>
      {authenticated ? (
        <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
          Dashboard
        </button>
      ) : (
        <>
          <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
            Login
          </button>
          <button className="rounded w-28 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
            Signup
          </button>
        </>
      )}
    </div>
  );
};

export default Navbar;

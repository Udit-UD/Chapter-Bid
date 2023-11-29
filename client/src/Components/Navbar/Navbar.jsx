import { useState } from "react";
import Logo from "../../assets/Images/logo.png";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [notiClicked, setNotiClicked] = useState(false);

  const handleNotiClick = () => {
    setNotiClicked(!notiClicked);
    console.log("Clicked!");
  };

  return (
    <div className="absolute z-10 flex  px-14 items-center bg-login-trans w-full h-16 shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-12 w-12" />
      </div>
      <NavLinks />
      <div className="flex flex-grow"></div>
      {authenticated ? (
        <div className="flex items-center justify-between">
          <div className="text-2xl text-gray-700 w-8 m-4 text-center">
            <FaRegBell
              className={`hover:cursor-pointer ${
                notiClicked ? "text-black" : ""
              }`}
              onClick={handleNotiClick}
            />
          </div>
          <Link to="/profile">
            <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
              Profile
            </button>
          </Link>
        </div>
      ) : (
        <>
          <Link to={"/login"}>
            <button className="rounded w-28 mx-4 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="rounded w-28 h-10 p-2 text-1.15 flex font-medium items-center justify-center bg-login-trans hover:bg-black hover:text-white">
              Signup
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;

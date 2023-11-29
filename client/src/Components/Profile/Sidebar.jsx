import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync, selectUserData } from "../../Features/Auth/authSlice";



export const Sidebar = ({activePage}) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();
  const getDivStyle = (pageName) => {
    return activePage == pageName ? "bg-purple-600 font-bold text-white" : "";
  };

  useEffect(() => {
    if (!userData.isAuthenticated) navigate("/login");
  }, [userData.isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logoutAsync());
  }
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
          <div className={`h-16 rounded-xl cursor-pointer my-1 w-full flex justify-center items-center ${getDivStyle("logout")}`}>
            <span className='text-xl font-sans ' onClick={handleLogout}>Logout</span>
          </div>
    </div>
  )
}

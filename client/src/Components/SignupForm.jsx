import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const RegisterURL = "/register";

const CredForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post(RegisterURL, 
        JSON.stringify({userName, email, password}),
        {
          headers: {"Content-Type": "application/json"},
          withCredentials: true
        }
      );
      console.log(res?.data);
      setUserName('');
      setPassword('');
      setEmail('');


    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <div className="h-screen bg-login-background bg-cover bg-center bg-no-repeat backdrop-blur-md flex justify-center items-center">
        <div className="login-box h-3/4 w-1/3 bg-login-trans shadow-shad-trans">
          {/* BOX HEADER */}
          <div className="register-header flex p-4 h-28">
            <span className="register-logo flex h-20 w-20 border-black border-2"></span>
            <span className="register-head-box flex-col mt-2 ml-4 h-20 w-96">
              <h1 className="register-primary text-3xl font-semibold py-1">
                Sign Up
              </h1>
              <h2 className="register-secondary py-0 text-l">
                Registration yourself to Participate in Book Bidding
              </h2>
            </span>
          </div>

          {/* INPUTS */}

          <div className="register-inputs flex-col h-1/3 w-5/6 justify-center items-center mx-10 my-14">
            <form onSubmit={handleSubmit} method="get">
              <input
                className="reg-inputs w-full my-2 p-2 bg-white-300 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border-2"
                type="text"
                required
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
              />
              <input
                className="reg-inputs w-full my-2 p-2 bg-white-300 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border-2"
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <input
                className="reg-inputs w-full my-2 p-2 bg-white-300 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border-2"
                type="password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button
                className="click-btn rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-lg transition-all block mx-auto my-8 p-3 px-16 text-white font-bold"
                type="submit"
              >
                {" "}
                Sign Up{" "}
              </button>
            </form>
            <h2 className="register-secondary text-center">
              Already a user?{" "}
              <Link
                to="/login"
                className="login-link underline text-black hover:text-white hover:bg-blue-400"
              >
                Login Now
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CredForm;

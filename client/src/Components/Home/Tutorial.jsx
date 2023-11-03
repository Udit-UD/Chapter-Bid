import React from 'react';
import {AiOutlineLogin, AiOutlineSearch} from "react-icons/ai";
import {BiSolidDashboard, BiDollar} from "react-icons/bi";

export const Tutorial = () => {
  return (
    <div className='h-img-h m-8'>
        <h1 className='text-4xl font-extrabold text-center text-sky-700'>
            How to Use?
        </h1>
        <h2 className='text-l text-center mb-6 text-slate-700  font-sans'>
            Here's a step by step tutorial, defining how to use us!
        </h2>

        <div className="flex justify-evenly h-4/5 w-full">
             <div className="h-4/5 w-3/5 mr-4 bg-blue-300 border-2 rounded-xl">
                <AiOutlineLogin className='text-5rem text-white text-center w-full mt-10' />
                <h1 className='text-3xl text-center text-white font-bold mt-4'>Register</h1>
                <p className= "text-white text-center p-2">Register to your account to use our Auction Site and do some Bidding</p>
             </div>
             <div className="h-4/5 w-3/5 mr-4 bg-blue-300 border-2 rounded-xl">
             <BiSolidDashboard className='text-5rem text-white text-center w-full mt-10' />
                <h1 className='text-3xl text-center text-white font-bold mt-4'>Dashboard</h1>
                <p className= "text-white text-center p-2">Go to your dashboard and setup your profile to start bidding!</p>
             </div>
             <div className="h-4/5 w-3/5 mr-4 bg-blue-300 border-2 rounded-xl">
             <AiOutlineSearch className='text-5rem text-white text-center w-full mt-10' />
                <h1 className='text-3xl text-center text-white font-bold mt-4'>Search</h1>
                <p className= "text-white text-center p-2">Search for your favorite book and do Participate in the Bidding room!</p>
             </div>
             <div className="h-4/5 w-3/5 bg-blue-300 border-2 rounded-xl">
             <BiDollar className='text-5rem text-white text-center w-full mt-10' />
                <h1 className='text-3xl text-center text-white font-bold mt-4'>Bdding</h1>
                <p className= "text-white text-center p-2">That's it, set up your bid and start Bidding!</p>
             </div>
        </div>
    </div>
  )
}

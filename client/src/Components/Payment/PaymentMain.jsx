import React from 'react';
import {ProdNav} from "../ProductPage/ProdNav";

export const PaymentMain = () => {
  return (
    <div className='h-full  overflow-hidden'>
      <ProdNav />
      <div className="h-90 w-screen flex justify-center items-center ">
        <div className='h-70vh w-4/5 border-2 rounded shadow-xl p-6 px-10'>
          <span>
            <h1 className="text-3xl font-bold">
              Your Details
            </h1>
            <p className="text-md">
              Enter your Personal details for Shipment Purposes
            </p>
          </span>
          <div className="mt-10">
            <form>
              <div className="flex w-90% justify-evenly">
                <span className='w-2/5'>
                <label htmlFor="name" className='text-md font-semibold text-gray-600'> Your Name </label> <br />
                <input type="text" placeholder='Michael Jackson' className='w-full p-1 border-0 border-purple-600 border-b-2 focus:outline-none font-semibold'/>
                </span>
                <span className='w-2/5'>
                <label htmlFor="email" className='text-md font-semibold text-gray-600'> Email </label> <br />
                <input type="email" placeholder='abc@gmail.com ' className='w-full p-1 border-0 border-purple-600 border-b-2 focus:outline-none font-semibold'/>
                </span>
              </div>
              <div className="flex w-90% mt-6 justify-evenly">
                <span className='w-2/5'>
                <label htmlFor="name" className='text-md font-semibold text-gray-600'> Address 1 </label> <br />
                <input type="text" placeholder='105, KL Gate, Sector 24' required className='w-full p-1 border-0 border-purple-600 border-b-2 focus:outline-none font-semibold'/>
                </span>
                <span className='w-2/5'>
                <label htmlFor="email" className='text-md font-semibold text-gray-600'> Zip Code </label> <br />
                <input type="number" placeholder='243601 ' className='w-full p-1 border-0 border-purple-600 border-b-2 focus:outline-none font-semibold'/>
                </span>
              </div>

              <div className="flex w-90% mt-6 justify-evenly">
                <span className='w-2/5'>
                <label htmlFor="name" className='text-md font-semibold text-gray-600'> Any Comments </label> <br />
                <input type="text" placeholder='Deliver after 10:00pm' required className='w-full p-1 border-0 border-purple-600 border-b-2 focus:outline-none font-semibold'/>
                </span>
                <span className='w-2/5'>
                  <label htmlFor="paymentMethod" className='text-md font-semibold text-gray-600'>Payment Method</label> <br />
                  <input type="radio" id="online" name="paymentMethod" value="debit" className='mr-1 focus:outline-none font-semibold' />
                  <label htmlFor="online" className='text-md '>Debit Card</label>
                  <input type="radio" id="offline" name="paymentMethod" value="credit" className='ml-4 mr-1 focus:outline-none font-semibold' />
                  <label htmlFor="offline" className='text-md '>Credit Card</label>
                  <input type="radio" id="offline" name="paymentMethod" value="upi" className='ml-4 mr-1 focus:outline-none font-semibold' />
                  <label htmlFor="offline" className='text-md '>UPI</label>
                </span>

              </div>

            </form>
            <div className="w-90% h-12 mt-16 flex justify-center">
              <button className='w-2/5 rounded-xl text-xl p-2 font-bold text-white bg-purple-600'> 
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

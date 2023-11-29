import React, { useState } from 'react'
import { useBookDataContext } from '../../Context/BookContext';
import {AiOutlineClockCircle} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import bidPlaced from "../../assets/Images/bidPlaced.gif";
export const BiddingMain = () => {

    const {selectedBook} = useBookDataContext();
    const [currAmount, setCurrAmount] = useState(selectedBook ? parseFloat(selectedBook.price.replace(/,/g, '')) : 0);
    const [highestBid, setHighestBid] = useState(selectedBook ? parseFloat(selectedBook.price.replace(/,/g, ''))+500: 0);
    const [showModal, setShowModal] = useState(false);

    const handlePlace = () => {
        setShowModal(true);
        if(currAmount > highestBid)
            setHighestBid(currAmount);
    }


  return (
    <div>
        {selectedBook ? 
        <>
            <div className={` w-full h-90 py-6 mt-2 flex justify-evenly items-center ${showModal ? "blur" : ""}`}>
                <div className="w-2/5 h-90% rounded-xl border-2 flex items-center justify-center">
                    <img src={`${selectedBook.image}`} alt="" className='w-90% h-90%' />
                </div>
                <div className="w-2/5 -ml-4 h-90% px-8 py-1">
                    <span className='w-full'>
                        <h1 className="text-4xl font-bold ">
                            {selectedBook.bookName}
                        </h1>
                        <span className='flex items-center'>
                            <AiOutlineClockCircle className='text-gray-500 text-xl' />
                            <p className='text-gray-700 font-semibold px-4 pl-2'>1 hour left</p>
                            <h3 className="bg-green-600 text-white px-4 py-0.5 rounded-xl font-bold ">Ongoing</h3>
                        </span>
                    </span>

                    <div className="mt-4">
                        <p className="text-l text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam impedit dolorum quisquam animi qui architecto, quos dolore, veritatis, obcaecati iusto temporibus corporis? Nulla, earum labore unde nihil quam at praesentium ad.
                        </p>
                    </div>

                    <div className="mt-6 rounded-xl bg-gray-100 w-full p-4 flex">
                        <span className='w-1/3 border-r-2 '>
                            <h1 className="text-l font-semibold">Highest Bid Till Now</h1>
                            <h3 className='text-l font-bold text-green-600 mt-2'>Rs. {highestBid}</h3>
                        </span>
                        <span className='w-1/3 pl-6 border-r-2'>
                            <h1 className="text-l font-semibold">Starting Bid Price</h1>
                            <h3 className='text-l font-bold text-red-600 mt-2'>Rs. {selectedBook.price}</h3>
                        </span>
                        <span className='w-1/3 pl-6 '>
                            <h1 className="text-l font-semibold">Participants</h1>
                            <h3 className='text-l font-bold text-purple-600 mt-2'>1000</h3>
                        </span>
                    </div>
                    <div className="w-full  flex justify-center items-center">
                        <div className="border-2 w-90%  rounded mt-4 "></div>
                    </div>

                    <div className="mt-4 rounded-xl bg-gray-100 w-full p-4 px-8 flex">
                        <span className='w-45% border-r-2 '>
                            <h1 className="text-l font-semibold">Top Bidder Till Now</h1>
                            <span className='flex mt-4 items-center'>
                                <FaRegCircleUser className='text-4xl'/>
                                <span className='px-4'>
                                    <h2 className="text-l font-bold">Michael Jackson</h2>
                                    <h3 className="text-m font-semibold text-green-600 ">Rs. {highestBid}</h3>
                                </span>
                            </span>
                        </span>
                        <span className='w-45% pl-6 '>
                            <h1 className="text-l font-semibold">Your Status</h1>
                            <span className='flex mt-4 items-center'>
                                <FaRegCircleUser className='text-4xl'/>
                                <span className='px-4'>
                                    <h2 className="text-l font-bold">Udit Gupta</h2>
                                    <h3 className="text-m font-semibold ">Rs. 0</h3>
                                </span>
                            </span>
                        </span>
                    </div>
                    
                    <div className="mt-8 flex justify-between">

                        <div className="w-1/2 rounded-xl bg-gray-600 h-16 border-2 flex justify-between items-center">
                            
                            <button className='w-1/5 text-xl font-bold text-white cursor-pointer' 
                            onClick={()=>{setCurrAmount(currAmount - 100)}}>
                                -
                            </button>
                            <span className='w-3/5'>
                                <h1 className="text-xl font-bold text-white text-center">{currAmount}</h1>
                            </span>
                            <button className='w-1/5 text-xl font-bold text-white cursor-pointer' 
                            onClick={()=>{setCurrAmount(currAmount + 100)}}>
                                +
                            </button>

                        </div>

                        <div className="w-2/5">
                            <button className="w-full bg-green-600 font-bold text-white text-xl h-16 rounded-xl"
                            onClick={handlePlace}>
                                Place Bid
                            </button>
                        </div>                        
                    </div>
                </div>
            </div> 
            {showModal ? (
                <div>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-1/4 my-2 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center w-full justify-center p-5 rounded-t ">
                        <h3 className="text-3xl text-center font-semibold">Bid Placed!</h3>
                        </div>
                        <img src={bidPlaced} alt="" />

                        
                        <div className="relative w-full flex justify-center items-center p-6 ">
                        <button
                            className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Okay
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
      ) : null}
        </>
            
        : 
        <p>
            No book selected!
        </p>
        }
    </div>
  )
}


import React, { useState } from 'react'
import { useBookDataContext } from '../../Context/BookContext'
import {AiOutlineHeart, AiOutlineShopping, AiOutlineInfoCircle, AiFillHeart} from "react-icons/ai"
import { Recommendations } from './Recommendations';
import { Link } from 'react-router-dom';

export const Product = ({data}) => {
  const [prodLiked, setProdLiked] = useState(false);
  const {selectedBook} = useBookDataContext();
  return (
    <>
    <div className='flex justify-center'>
      {selectedBook ? 
          <div className="w-4/5 h-full pt-6 shadow-md border-solid border-gray-100 border-b-0">
            <div className="flex">
              <div className="h-70vh w-2/5 p-10 flex justify-center items-center flex-col">
                <span className='w-full flex justify-end hover:cursor-pointer' onClick={()=>setProdLiked(!prodLiked)}>
                {
                  prodLiked ? <AiFillHeart className="text-red-500 text-4xl"/> 
                  :
                  <AiOutlineHeart className=' text-gray-500 text-4xl  ' />
                }
                </span>
                <img src={selectedBook.image} className='h-full w-4/5' alt="" />
              </div>
              <div className="w-3/5 h-full">
                <h2 className="font-semibold text-2xl pt-10">
                  {selectedBook.bookName}
                </h2>
                <div className='flex mt-2 w-3/5 justify-between'>
                  <h3 className="font-bold text-2xl text-green-600">
                    Rs {selectedBook.price}
                  </h3>
                  <div className="bg-green-600 flex items-center py-1 text-sm px-2 text-center text-white rounded">
                    Free-Shipping
                  </div>
                </div>

                <div className="mt-4">
                  <p className='bg-blue-100 rounded p-2 w-2/5 text-green-600 font-semibold'>Shipping is available from seller!</p>
                </div>

                <div className="mt-8">
                  <Link to="/bidding">
                    <button className="rounded w-3/5 h-16 p-2 text-1.15 flex font-medium items-center justify-center bg-purple-600 hover:bg-purple-800 text-white">
                    Start Bidding <AiOutlineShopping className=' pl-2 text-3xl ' />
                    </button>
                  </Link>
                </div>

                <div className="mt-8">
                  <h3 className='text-xl font-semibold'>Description</h3>
                  <p className='text-justify pr-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore rerum adipisci quam in ipsum quaerat expedita ducimus, vero eaque blanditiis, mollitia omnis modi veritatis. Recusandae eum odit temporibus accusantium a doloremque quisquam exercitationem quibusdam vel? Dicta vero recusandae cum excepturi in laborum praesentium, quibusdam laudantium consequuntur a sunt. Enim, officiis!</p>
                </div>

                <div className="mt-4 flex bg-blue-100 w-3/5 p-4 rounded text-blue-600 text-2xl justify-center items-center">
                  <AiOutlineInfoCircle /> <p className='text-black pl-4 text-sxl font-normal'>Need More Information? Chat with Seller!</p>  
                  
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-8 mb-10">

              <Recommendations data={data} />
            </div>
          </div>
      
      : <p>No Book selected</p>}
    </div>
    </>
  )
}

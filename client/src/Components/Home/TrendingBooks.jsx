import React from 'react'

export const TrendingBooks = ({data}) => {
    const divCount = [0,1,2,3,4]
  return (
    <>
        <div className=' h-70vh min-w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 px-8 pb-16'>
            <span>
                <h1 className="text-4xl font-extrabold text-left italic text-white  font-sans">  Trending Books</h1>
                <p className="font-semibold mb-10 text-white ">People are going crazy over them, Participate in Auction Now!</p>
            </span>
            <div className='flex h-img-h'>

            {divCount.map((item, i) => (
                <div
                className=" w-1/5 bg-login-trans h-80 mx-6 shadow-2xl cursor-pointer hover:scale-105 ease-in duration-200 rounded-xl p-4 pb-10"
                key={i}
            > 
                <img
                src={data[item].image}
                className="block m-auto p-4 h-3/4 w-70"
                alt="book"
                />
                <div className="mx-4">
                <p className="title text-l font-semibold mt-3">
                    {data[item].bookName}
                </p>
                <span className="price">
                    <p>
                    Opening Bid:{" "}
                    <i className=" font-semibold text-green-700">
                        {data[item].price}rs
                    </i>{" "}
                    </p>
                </span>
                <span>
                    <p>
                    Starting in:{" "}
                    <i className="font-semibold text-red-500">
                        {data[item].time} mins
                    </i>
                    </p>
                </span>
                </div>
            </div>
            ))}
            </div>
        </div>

    </>
  )
}

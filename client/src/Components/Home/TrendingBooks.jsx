import React from 'react'

export const TrendingBooks = () => {
    const data = [{"id":1,"bookName":"The Da Vinci Code","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd-FcEivW5nlDiTtnuP_L2Xj4tOmQbBIbag&usqp=CAU","time":53,"price":66155},{"id":2,"bookName":"The Chronicles of Narnia","image":"https://p.kindpng.com/picc/s/267-2674764_book-cover-hd-png-download.png","time":38,"price":43419},{"id":3,"bookName":"The Book Thief","image":"https://www.swampscottlibrary.org/wp-content/uploads/the-book-thief-two-covers.png","time":19,"price":24027},{"id":4,"bookName":"Moby-Dick","image":"https://media.surfersjournal.com/wp-content/uploads/2023/02/28112619/Moby-Dick-e1677620196857.png","time":38,"price":20432},{"id":5,"bookName":"Harry Potter: Sorcerer","image":"https://www.seekpng.com/png/detail/316-3167783_harry-potter-and-the-philosophers-stane-harry-potter.png","time":29,"price":66227},{"id":6,"bookName":"The Lord of the Rings","image":"https://c8.alamy.com/comp/C911XW/the-lord-of-the-rings-by-jrr-tolkein-C911XW.jpg","time":26,"price":72105},{"id":7,"bookName":"The Book Thief","image":"https://miro.medium.com/v2/resize:fit:1400/1*lco5PfrTlhKrq8012nnc9w.png","time":30,"price":28879},{"id":8,"bookName":"The Great Gatsby","image":"http://dummyimage.com/209x100.png/cc0000/ffffff","time":51,"price":40196},{"id":9,"bookName":"1984","image":"http://dummyimage.com/193x100.png/ff4444/ffffff","time":15,"price":52039},{"id":10,"bookName":"1984","image":"http://dummyimage.com/141x100.png/ff4444/ffffff","time":51,"price":17059}];
    const divCount = [0,1,2,3,4]
  return (
    <>
        <div className=' h-70vh min-w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 px-8 pb-16'>
            <span>
                <h1 className="text-4xl font-extrabold text-left text-white mb-10 font-sans">  {">>>"}Trending Books! &#128293; </h1>
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

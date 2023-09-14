import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Books = ({ booksData }) => {
  const [index, setIndex] = useState(0);
  const handleClick = (dir) => {
    console.log(booksData.length);
    if (dir === "right") {
      setIndex((prevIndex) => (prevIndex + 1) % booksData.length);
    } else {
      setIndex((prevIndex) => {
        if (prevIndex === 0) {
          return booksData.length - 1;
        } else {
          return prevIndex - 1;
        }
      });
    }
  };

  const divCount = [0, 1, 2];
  return (
    <>
      <div className="main-box w-full flex relative mt-12 mb-2 justify-center items-center h-4/5">
        <div className="absolute rounded-e-lg -left-8 bg-slate-200 w-auto p-2 text-3xl h-20 top-1/2 flex justify-between">
          <button onClick={() => handleClick("left")}>
            <AiOutlineLeft />
          </button>
        </div>

        {/* Container! */}

        {divCount.map((item, i) => (
          <div
            className=" w-1/4 h-full mx-6  shadow-xl hover:scale-105 ease-in duration-200 rounded-xl p-4"
            key={i}
          >
            <img
              src={booksData[index + item].image}
              className="block m-auto p-4 h-3/5 w-70"
              alt="book"
            />
            <div className="mx-4">
              <p className="title text-xl font-semibold mt-3">
                {booksData[index + item].bookName}
              </p>
              <span className="price">
                <p>
                  Opening Bid:{" "}
                  <i className=" font-semibold text-green-700">
                    {booksData[index + item].price}rs
                  </i>{" "}
                </p>
              </span>
              <span>
                <p>
                  Starting in:{" "}
                  <i className="font-semibold text-red-500">
                    {booksData[index + item].time} mins
                  </i>
                </p>
              </span>
              <form action="participate" method="post">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 mt-8 font-bold text-white w-full h-12 rounded"
                >
                  Participate
                </button>
              </form>
            </div>
          </div>
        ))}

        <div className="absolute rounded-s-lg bg-slate-200 w-auto p-2 text-3xl h-20 top-1/2 -right-8 flex items-center">
          <button onClick={() => handleClick("right")}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;

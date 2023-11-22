import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import MenBook from "../../assets/Images/MenBook.png";

const HeroSection = () => {
  const [searchBook, setSearchBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchBook);
    setSearchBook("");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-banner ">
        <div className="flex h-banner w-screen">
          <div className="text flex flex-col justify-center text-left ml-20 w-3/5 h-full">
            <h1 className="font-bold font-sans text-5xl text-white">
              Turning Pages, <i>Winning</i> Bids:
            </h1>
            <h2 className="font-bold font-sans text-2xl text-white">
              Discover the Thrill of <i>Book Bidding</i> on Our Platform!
            </h2>

            <form
              action="search"
              className="flex justify-start items-center mt-6"
              onSubmit={handleSubmit}
              method="post"
            >
              <input
                type="text"
                placeholder="Search for the Book"
                value={searchBook}
                className="rounded w-3/5 h-10 p-2 "
                onChange={(e) => setSearchBook(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-800 p-2 border-solid rounded h-10 text-white"
              >
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="relative h-banner w-2/5">
            <img
              src={MenBook}
              className="absolute right-10 bottom-0 h-img-h w-400"
              alt="book"
            />
            <div className="absolute w-3/4 h-10 bg-green-600 text-white right-0 -bottom-2 px-5 flex rounded-l-xl font-bold items-center">
              20 Books Auction Happening Now!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

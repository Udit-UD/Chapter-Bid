import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";

const url = "https://my.api.mockaroo.com/booksapi.json?key=d9f0d370";

// const mockBooksData = [
//   {
//     id: 1,
//     title: "Book 1",
//     author: "Author 1",
//     publicationYear: 2022,
//     price: 25.99,
//   },
//   {
//     id: 2,
//     title: "Book 2",
//     author: "Author 2",
//     publicationYear: 2021,
//     price: 19.99,
//   },
//   {
//     id: 3,
//     title: "Book 3",
//     author: "Author 3",
//     publicationYear: 2020,
//     price: 29.99,
//   },
//   {
//     id: 1,
//     title: "Book 1",
//     author: "Author 1",
//     publicationYear: 2022,
//     price: 25.99,
//   },
//   {
//     id: 2,
//     title: "Book 2",
//     author: "Author 2",
//     publicationYear: 2021,
//     price: 19.99,
//   },
//   {
//     id: 3,
//     title: "Book 3",
//     author: "Author 3",
//     publicationYear: 2020,
//     price: 29.99,
//   },
// ];


const RunningBids = () => {
    const [booksData, setBooksData] = useState(url);
    const fetchData = async() => {
      try {
        const res = await axios(url);
        const data = res.data;
        setBooksData(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      fetchData();      
    }, [])
    
  return (
    <>
      <div className="h-95 min-w-screen bg-slate-50 p-6 px-8 pb-4">
        <span>
          <h1 className="text-4xl text-center mt-4 text-slate-700 font-sans" >Upcoming Bids 💸</h1>
          <h1 className="text-l text-center mb-6 text-slate-700  font-sans" >Stay informed about upcoming auctions before they expire!</h1>
        </span>

        {booksData && <Books booksData = {booksData} /> }
        
      </div>
    </>
  );
};

export default RunningBids;

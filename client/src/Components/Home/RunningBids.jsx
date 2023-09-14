import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";

const url = "https://my.api.mockaroo.com/booksapi.json?key=d9f0d370";

const RunningBids = () => {
    const [booksData, setBooksData] = useState(null);
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

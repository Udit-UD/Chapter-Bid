import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";

const url = "https://my.api.mockaroo.com/booksapi.json?key=d9f0d370";

const RunningBids = () => {
    const [booksData, setBooksData] = useState(null);
    const fetchData = async() => {
      try {
        // const res = await axios(url);
        // const data = res.data;
        const data = [{"id":1,"bookName":"The Da Vinci Code","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd-FcEivW5nlDiTtnuP_L2Xj4tOmQbBIbag&usqp=CAU","time":53,"price":66155},{"id":2,"bookName":"The Chronicles of Narnia","image":"https://p.kindpng.com/picc/s/267-2674764_book-cover-hd-png-download.png","time":38,"price":43419},{"id":3,"bookName":"The Book Thief","image":"https://www.swampscottlibrary.org/wp-content/uploads/the-book-thief-two-covers.png","time":19,"price":24027},{"id":4,"bookName":"Moby-Dick","image":"https://media.surfersjournal.com/wp-content/uploads/2023/02/28112619/Moby-Dick-e1677620196857.png","time":38,"price":20432},{"id":5,"bookName":"Harry Potter: Sorcerer's","image":"https://www.seekpng.com/png/detail/316-3167783_harry-potter-and-the-philosophers-stane-harry-potter.png","time":29,"price":66227},{"id":6,"bookName":"The Lord of the Rings","image":"https://c8.alamy.com/comp/C911XW/the-lord-of-the-rings-by-jrr-tolkein-C911XW.jpg","time":26,"price":72105},{"id":7,"bookName":"The Book Thief","image":"https://miro.medium.com/v2/resize:fit:1400/1*lco5PfrTlhKrq8012nnc9w.png","time":30,"price":28879},{"id":8,"bookName":"The Great Gatsby","image":"http://dummyimage.com/209x100.png/cc0000/ffffff","time":51,"price":40196},{"id":9,"bookName":"1984","image":"http://dummyimage.com/193x100.png/ff4444/ffffff","time":15,"price":52039},{"id":10,"bookName":"1984","image":"http://dummyimage.com/141x100.png/ff4444/ffffff","time":51,"price":17059}];
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
      <div className="h-95 min-w-screen bg-white p-6 px-8 pb-16">
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

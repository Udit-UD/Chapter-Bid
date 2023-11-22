import React from 'react'
import { useBookDataContext } from "../../Context/BookContext";
import { Link } from 'react-router-dom';

export const Recommendations = ({data}) => {
    const divCount = [0,1,2,3,4,5,6,7]
    const {setBookData} = useBookDataContext();

    const handleParticipateClick = (clickedBook) => {
        
        setBookData(clickedBook);
        scrollToTop();
    }
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

  return (
    <div>
        <h1 className="text-2xl p-8 font-semibold">
            Recommendations
        </h1>
        <div className="flex justify-evenly items-center flex-wrap">
        {divCount.map((item, i)=> (
            
            <div className="w-23% border-2  shadow-md my-4 h-30vh rounded-xl hover:scale-105 ease-in-out transition-all" key={i}>
                <Link to="/productPage" onClick={()=>{handleParticipateClick(data[item])}}>

                <img
                src={data[item].image}
                className="block m-auto p-4 h-20vh w-70"
                alt="book"
                />
                <span>
                    <h3 className="text-md font-semibold px-6">
                        {data[item].bookName}
                    </h3>
                    <h2 className="text-md text-green-600 font-bold px-6">
                        Rs. {data[item].price}
                    </h2>
                </span>
            </Link>
            </div>
        ))}
        </div>

    </div>
  )
}

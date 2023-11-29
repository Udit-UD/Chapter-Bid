import HeroSection from "../Components/Home/HeroSection";
import RunningBids from "../Components/Home/RunningBids";
import Navbar from "../Components/Navbar/Navbar";
import { TrendingBooks } from "../Components/Home/TrendingBooks";
import { Tutorial } from "../Components/Home/Tutorial";
import { Footer } from "../Components/Home/Footer";
import { data } from "../constants/BooksData";

const Home = () => {
    return(
        <>
            <div className="overflow-hidden">
            <Navbar />
            <HeroSection id="upcoming" />
            <RunningBids listedBooks={data}/>
            <TrendingBooks data={data}/>
            <Tutorial />
            <Footer />
            </div>

        </>
    )
}

export default Home;
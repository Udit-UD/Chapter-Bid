import HeroSection from "../Components/Home/HeroSection";
import RunningBids from "../Components/Home/RunningBids";
// import Steps from "../Components/Home/Steps";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
    return(
        <>
            <div className="overflow-hidden">
            <Navbar />
            <HeroSection id="upcoming" />
            <RunningBids />
            {/* <Steps /> */}
            </div>

        </>
    )
}

export default Home;
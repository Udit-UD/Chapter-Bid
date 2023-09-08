import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import RunningBids from "../Components/Home/RunningBids";
import Steps from "../Components/Home/Steps";

const Home = () => {
    return(
        <>
            <div className="overflow-hidden">
            <HeroSection />
            <RunningBids />
            <Steps />
            </div>

        </>
    )
}

export default Home;
import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import RunningBids from "../Components/Home/RunningBids";
import Navbar from "../Components/Navbar/Navbar";
import { TrendingBooks } from "../Components/Home/TrendingBooks";
import { Tutorial } from "../Components/Home/Tutorial";
import { Footer } from "../Components/Home/Footer";

const Home = () => {
    return(
        <>
            <div className="overflow-hidden">
            <Navbar />
            <HeroSection id="upcoming" />
            <RunningBids />
            <TrendingBooks />
            <Tutorial />
            <Footer />
            </div>

        </>
    )
}

export default Home;
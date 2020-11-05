import React from "react";
import houseImg from "../imgs/pic-6.jpg";
import HomePageDescr from "../components/HomePageDescr";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      >
        <span className="phs-text text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">
          Find the perfect house for you
        </span>
      </div>
      <HomePageDescr />
    </div>
  );
}
export default Home;

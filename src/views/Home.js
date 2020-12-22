import React from "react";
import houseImg from "../imgs/hero-img-1.jpg";
import HomePageDescr from "../components/HomePageDescr";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="phs-home">
      <Navbar />
      <div
        className="header-pic bg-center bg-cover bg-no-repeat h-64 md:h-400px md:w-1140px md:bg-fixed md:block md:ml-auto md:mr-auto "
        style={{ backgroundImage: `url(${houseImg})` }}
      >
        <h1 className="phs-text text-white text-2xl sm:text-2xl md:text-6xl text-center font-bold md:pt-40">
          We find the perfect house for you
        </h1>
        </div>
 
  
      <HomePageDescr />
      <BottomNav />
    </div>
  );
}
export default Home;

import React from "react";
import houseImg from "../imgs/hero-img-1.jpg";
import logo from "../imgs/PHS.png";
import HomePageDescr from "../components/HomePageDescr";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="phs-home">
      <div className= "navbar flex flex-row justify-between">
      <Navbar />
      <img
          className="logo h-10 w-10 mr-4 md:mr-10 "
          src={logo}
          alt="What is Personal Home Shopper"
        />
        </div>
      <div
        className="header-pic bg-center bg-cover bg-no-repeat h-64 mt-10 md:h-400px md:w-1140px md:bg-fixed md:block md:ml-auto md:mr-auto "
        style={{ backgroundImage: `url(${houseImg})` }}
      >
        <h1 className="phs-text text-white text-base md:text-4xl text-center font-bold md:pt-40">
          We find the perfect house for you
        </h1>
        </div>
 
  
      <HomePageDescr />
      <BottomNav />
    </div>
  );
}
export default Home;

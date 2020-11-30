import React from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import houseImg from "../imgs/hero-img.jpg";


function Prices() {
    return (
      <>
      <Navbar/>
      <div className="phs-about-wrapper-hero">
      <div
          className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
          style={{ backgroundImage: `url(${houseImg})` }}
        ></div>
        </div>
     <div className="phs-price-container mt-16 mb-16 ml-4 mr-4 bg-white border-solid border-4 rounded-md h-64 flex flex-col items-center">
        <span className="">My price is awesome</span>
     </div>
  
      <BottomNav/>
      </>
    );
  }
  export default Prices;
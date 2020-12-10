import React from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Zoom from "react-reveal/Zoom";
import houseImg from "../imgs/hero-img-1.jpg";

function About() {
  return (
    <>
    <Navbar/>
    <div className="phs-about-wrapper-hero ">
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div>
      <div className="phs-dna-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
            Our DNA
          </h1>
        </Zoom>
      <p className="mt-6">There are a lot of companies that do what we do. But our DNA is special.We prime by authenticy and we use empathy to define
        what the best house would like for you. We put ourselves in your shoes. Literally. We find the house that you wanted only 
        you didn't need to spend 1000 hours thinking about it. We know what you need. 
      </p>
      </div>
      <div className="phs-dna-content-wrapper-2 mb-6 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3 ml-4 mt-10 ">
            How can I get a personal home shopper service?
          </h1>
        </Zoom>
      <p className="mt-6">All you need to do is to contact us, telling us what would be your dream house. We will take care of the rest for you.
      </p>
      </div>
    </div>
    <BottomNav/>
    </>
  );
}
export default About;

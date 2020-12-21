import React from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Zoom from "react-reveal/Zoom";
import houseImg from "../imgs/pic-12.jpg";
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <>
    <Navbar/>
    <div className="phs-about-wrapper-hero ">
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div>

      <div className="phs-mission-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
            - VISION -
          </h1>
        </Zoom>
        <Fade delay={500}>
      <p className ="flex flex-col text-center mt-6"> We help creating a world where home feels more like home and happiness feels more like happiness.</p>
      </Fade>
      </div>
      <div className="phs-mission-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
           - MISSION -
          </h1>
        </Zoom>
        <Fade delay={500}>
      <p className= "flex flex-col text-center mt-6">To create such world we start by finding the perfect house for YOU. We understand what defines you which help us understand what defines the perfect place to live for YOU. </p>
      </Fade>
      </div>
      <div className="phs-mission-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
            - OUR DNA - 
          </h1>
        </Zoom>
        <Fade delay={500}>
      <p className= "flex flex-col text-center mt-6"> We excel by our knowledge in the market and knowledge about what defines someone's taste for a certain type of house. Many years
      of experience with many different customers and personalised assistance allowed us to build the foundation knowledge we hold to help you finding the perfect home.  </p>
      </Fade>
      </div>
    </div>
    <BottomNav/>
    </>
  );
}
export default About;

import React from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Zoom from "react-reveal/Zoom";
import houseImg from "../imgs/pic-9.jpg";
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <>
    <Navbar/>
    <div className="phs-about-wrapper-hero md:w-1140px md:block md:ml-auto md:mr-auto ">
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div>

      <div className="phs-mission-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2 ">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
            - WHEN WE STARTED -
          </h1>
        </Zoom>
        <Fade delay={500}>
      <p className ="flex flex-col text-center mt-6"> In 2005, we started as a 1 person's business working for companies such as Era where we acquired a big customer portfolio. Through hard work and empathy we started
      captivating more and more customers to come to us to advice and the portfolio by that time was too big to manage. This is how Personal Home Shopper started. </p>
      </Fade>
      </div>
      <div className="phs-mission-content-wrapper-1 mt-10 flex flex-col items-center ml-2 mr-2">
      <Zoom left>
          <h1 className="text-2xl font-bold col-span-3">
           - MISSION -
          </h1>
        </Zoom>
        <Fade delay={500}>
      <p className= "flex flex-col text-center mt-6">To create a world where home feels more like home we start by finding the perfect house for YOU. We understand what defines you as a person which help us understand
       what defines the perfect place to live for YOU. </p>
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

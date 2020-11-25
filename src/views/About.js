import React from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import houseImg from "../imgs/hero-img-1.jpg";

function About() {
  return (
    <>
    <Navbar/>
    <div className="phs-about-wrapper-hero">
    <div
        className="header-pic flex items-center bg-center bg-cover bg-no-repeat h-64 sm:h-64 md:h-64 lg:h-488px lg:bg-fixed "
        style={{ backgroundImage: `url(${houseImg})` }}
      ></div>
      <div className="phs-dna-content-wrapper h-screen">
      <h1 className="phs-contact-us-title flex flex-col items-center text-2xl pt-8">Our DNA</h1>
      <p>There are a lot of companies that do what we do. But our DNA is special.We prime by authenticy and we use empathy to define
        what the best house would like for you. We put ourselves in your shoes. Literally. We find the house that you wanted only 
        you didn't need to spend 1000 hours thinking about it. We know what you need. 
      </p>
      </div>
    </div>
    <BottomNav/>
    </>
  );
}
export default About;

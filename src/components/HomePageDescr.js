import React from "react";
import housePic4 from "../imgs/pic-4.jpg";
import housePic13 from "../imgs/pic-13.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




function HomePageDescr (){

  return (
  <>
    <div className="phs-descr-container md:w-1140px md:block md:ml-auto md:mr-auto">
      <div className="grid-rows-2 grid-flow-col mt-20">
        <img
          className="img-php col-span-2 object-cover w-600 h-600 md:h-400px md:w-1140px "
          src={housePic4}
          alt="What is Personal Home Shopper"
        />
        <div className = " phs-all-text-wrapper">
        <Zoom left>
          <h1 className="text-2xl font-bold col-span-3 mt-10 text-center ">
            What is the Personal House Shopper?
          </h1>
        </Zoom>
        <Fade delay={500}>
        <p className="col-span-2 mt-6 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velitm
        </p>
        </Fade>
        </div>
      </div>
      <div className=" hp-descr grid-rows-3 grid-flow-col mt-20 ">
        <img
          className="img-php col-span-2 md:row-span-3 object-cover w-600 h-600 md:h-400px md:w-1140px"
          src={housePic13}
          alt="What is Personal Home Shopper"
        />
        <div className=" phs-alltext-wrapper col-span-2">
        <Zoom left>
          <h1 className="text-2xl font-bold row-span-1 col-span-2 mt-10 text-center">
            Where are we based?
          </h1>
        </Zoom>
        <Fade delay={500}>
        <p className="col-span-2 mt-6 text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velitm
        </p>
        </Fade>
        </div>
        <hr className="mt-10 md:block md:ml-auto md:mr-auto"></hr>
        <div className= "phs-services-icons-wrapper flex flex-col md:flex-row items-center justify-center mt-24 mb-24 w-600 h-600">
      <IconContext.Provider value={{ size: "100" }} >
          <div className=" pl-4 pr-4 pt-6 pb-6 flex flex-col items-center justify-center transform hover:scale-110 cursor-pointer shadow-md mr-10 w-64 h-64">
              <span className="mt-3" >We find the perfect house for you</span>
              <button className="bg-black text-white p-3 w-48 mt-6">Learn more</button>
          </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "100" }} >
        <div className="pl-4 pr-4 pt-6 pb-6 flex flex-col items-center justify-center transform hover:scale-110 cursor-pointer shadow-md mr-10 w-64 h-64">
          <span className="mt-4">We get in contact with the relevant people</span>
          <button className="bg-black text-white p-3 w-48 mt-6">Learn more</button>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "100" }} >
        <div className="pl-4 pr-4 pt-6 pb-6 flex flex-col items-center justify-center transform hover:scale-110 cursor-pointer shadow-md w-64 h-64 ">
        <span className="mt-4">We involve the necessary stakeholders</span>
        <button className="bg-black text-white p-3 w-48 mt-6">Learn more</button>
        </div>
      </IconContext.Provider>
      </div>
      </div>
    </div>

    </>
  )
}

export default HomePageDescr;

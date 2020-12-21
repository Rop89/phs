import React from "react";
import housePic4 from "../imgs/pic-4.jpg";
import housePic13 from "../imgs/pic-13.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';


function HomePageDescr() {
  return (
    <div className="hp-descr-container">
      <div className="hp-descr grid-rows-3 grid-flow-col">
        <img
          className="img-php col-span-2 md:row-span-3 object-cover w-600 h-600 mt-10 "
          src={housePic4}
          alt="What is Personal Home Shopper"
        />
        <Zoom left>
          <h1 className="text-2xl font-bold col-span-3 mt-10 text-center ">
            What is the Personal House Shopper?
          </h1>
        </Zoom>
        <Fade delay={500}>
        <p className="md:row-span-2 col-span-2 mt-6">
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
      <div className=" hp-descr grid-rows-3 grid-flow-col">
        <img
          className="img-php col-span-2 md:row-span-3 object-cover w-600 h-600 mt-10"
          src={housePic13}
          alt="What is Personal Home Shopper"
        />
        <Zoom left>
          <h1 className="text-2xl font-bold row-span-1 col-span-2 mt-10 text-center">
            Where are we based?
          </h1>
        </Zoom>
        <Fade delay={500}>
        <p className="md:row-span-2 col-span-2 mt-6">
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
  );
}
export default HomePageDescr;

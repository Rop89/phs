import React from "react";
import housePic4 from "../imgs/pic-4.jpg";
import housePic1 from "../imgs/pic-1.jpg";
import Zoom from "react-reveal/Zoom";

function HomePageDescr() {
  return (
    <div className="hp-descr-container">
      <div className=" hp-descr grid grid-rows-3 grid-flow-col gap-4 mt-8 mx-8 ">
        <img
          className="img-php col-span-2 md:row-span-3 object-cover w-full h-full"
          src={housePic4}
          alt="What is Personal Home Shopper"
        />
        <Zoom left>
          <h1 className="pt-6 text-2xl font-bold text-darkerGreen md:row-span-1 col-span-2">
            What is the Personal House Shopper?
          </h1>
        </Zoom>
        <p className="md:row-span-2 col-span-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velitm
        </p>
      </div>
      <div className=" hp-descr grid grid-rows-3 grid-flow-col gap-4 pl-8 pt-16 md:p-8 lg:p-8 xl:p-8">
        <img
          className="img-php row-span-3 h-48 w-64 md:w-64"
          src={housePic1}
          alt="What is Personal Home Shopper"
        />
        <Zoom left>
          <h1 className="pt-6 text-2xl font-bold text-darkerGreen row-span-1 col-span-2">
            Where are we based?
          </h1>
        </Zoom>
        <p className="row-span-2 col-span-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velitm
        </p>
      </div>
    </div>
  );
}
export default HomePageDescr;

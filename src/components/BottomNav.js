import React from "react";
import { SocialIcon } from "react-social-icons";


function BottomNav() {
  return (
    <>
    <hr className="mt-10"></hr>
    <div className="phs-hero-bottom-nav flex flex-col items-center ">
      <div className="phs-social-icons-wrapper pt-4">
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#000000"
            url="http://linkedin.com/in/"
          />
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#000000"
            url="http://facebook.com"
          />
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#000000"
            url="http://instagram.com"
          />
        </div>
        </div>
        <div className="phs-contact-details-wrapper flex flex-col  ">
          <span className="phs-phone pt-4">(+351) 91765334242 </span>
          <span className="phs-email pt-4">helena.profissional@gmail.com </span>
        </div>
        <div className="copyrights-wrapper flex flex-row items-center mt-12 ">
        <div className="phs-copyright text-xs">© Copyright PHS 2020. All rights reserved.</div>
        </div>
        <hr className=""></hr>
      
    </>
  );
}

export default BottomNav;

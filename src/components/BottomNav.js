import React from "react";
import { SocialIcon } from "react-social-icons";

function BottomNav() {
  return (
    <div className="phs-hero-bottom-nav grid grid-rows-3 grid-flow-row gap-4">
      <div className="phs-contact-text row-span-3">
        <h1>Contact us </h1>
      </div>
      <div className="phs-country-text-wrapper row-span-1 col-span-2">
        <span className="phs-country-text">Portugal </span>
      </div>
      <div className="phs-contact-details-wrapper row-span-2 col-span-2">
        <span className="phs-phone">91765334242 </span>
        <span className="phs-email">helena.profissional@gmail.com </span>
      </div>
      <div className="phs-social-networks-wrapper">
        <span className="phs-social-text">
          Follow us on our social networks
        </span>
        <SocialIcon
          style={{ height: 25, width: 25 }}
          bgColor="#000000"
          url="http://linkedin.com/in/"
        />
        <SocialIcon
          style={{ height: 25, width: 25 }}
          bgColor="#000000"
          url="http://facebook.com"
        />
        <SocialIcon
          style={{ height: 25, width: 25 }}
          bgColor="#000000"
          url="http://instagram.com"
        />
      </div>
    </div>
  );
}

export default BottomNav;

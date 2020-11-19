import React from "react";
import { SocialIcon } from "react-social-icons";
import { RiMapPin3Line } from "react-icons/ri";

function BottomNav() {
  return (
    <div className="phs-hero-bottom-nav bg-black text-white">
      <div className="phs-logo-wrapper flex flex-col items-center pt-4">
        <span className="phs-logo font-extrabold text-2xl">
          Personal Home Shopper
        </span>
      </div>

      <div className="phs-column-bottom-nav flex flex-col items-center pt-8">
        <div className="phs-country-text-wrapper flex flex-row pt-4 ">
          <RiMapPin3Line />
          <span className="phs-country-text"> Portugal </span>
        </div>
        <div className="phs-contact-details-wrapper flex flex-col items-center">
          <span className="phs-phone pt-4">91765334242 </span>
          <span className="phs-email pt-4">helena.profissional@gmail.com </span>
        </div>
      </div>
      <div className="phs-social-networks-wrapper flex flex-col items-center">
        <div className="phs-social-text-wrapper pt-4">
          <span className="phs-social-text">
            Follow us on our social networks
          </span>
        </div>
        <div className="phs-social-icons-wrapper pt-4">
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#FFFFFF"
            url="http://linkedin.com/in/"
          />
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#FFFFFF"
            url="http://facebook.com"
          />
          <SocialIcon
            style={{ height: 25, width: 25, margin: 10 }}
            bgColor="#FFFFFF"
            url="http://instagram.com"
          />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;

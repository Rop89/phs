import React from "react";
import Navbar from "../components/Navbar";
import ImageGallery from "react-image-gallery";
import property1 from "../imgs/phs-property-1.jpg";
import property2 from "../imgs/phs-property-2.jpg";
import property3 from "../imgs/phs-property-3.jpg";

const properties = [
  {
    original: `${property1}`,
    thumbnail: `${property1}`,
  },
  {
    original: `${property2}`,
    thumbnail: `${property2}`,
  },
  {
    original: `${property3}`,
    thumbnail: `${property3}`,
  },
];
const houseRentals = [
  {
    original: `${property1}`,
    thumbnail: `${property1}`,
  },
  {
    original: `${property2}`,
    thumbnail: `${property2}`,
  },
  {
    original: `${property3}`,
    thumbnail: `${property3}`,
  },
];
const holidayLettings = [
  {
    original: `${property1}`,
    thumbnail: `${property1}`,
  },
  {
    original: `${property2}`,
    thumbnail: `${property2}`,
  },
  {
    original: `${property3}`,
    thumbnail: `${property3}`,
  },
];
class Properties extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="phs-properties flex flex-col items-center mt-4">
          <h1 className="phs-main-title text-4xl mt-8">
            Properties & Services
          </h1>
          <div className="phs-phone-square-properties-sale mt-16">
            <h2>Properties for Sale</h2>
            <ImageGallery items={properties} />
          </div>
          <div className="phs-house-rentals mt-16">
            <h2>House Rentals</h2>
            <ImageGallery items={houseRentals} />
          </div>
          <div className="phs-holiday-lettings mt-16">
            <h2>Holiday Lettings</h2>
            <ImageGallery items={holidayLettings} />
          </div>
        </div>
      </>
    );
  }
}
export default Properties;

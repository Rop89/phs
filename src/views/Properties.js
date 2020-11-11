import React from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import ImageGallery from "react-image-gallery";
import property1 from "../imgs/phs-property-1.jpg";
import property2 from "../imgs/phs-property-2.jpg";
import property3 from "../imgs/phs-property-3.jpg";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

class Properties extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for async data, remove this block
      return (
        <ClipLoader
          css={override}
          size={150}
          color={"#000000"}
          loading={this.state.loading}
        />
      ); // render null when app is not ready
    }

    return (
      <>
        <Navbar />
        <div className="phs-properties flex flex-col items-center mt-4 text-center">
          <h1 className="phs-main-title text-4xl mt-8">
            Properties & Services
          </h1>
          <div className="phs-phone-square-properties-sale mt-16 text-2xl">
            <h2>Properties for Sale</h2>
            <ImageGallery items={properties} />
          </div>
          <div className="phs-house-rentals mt-16 text-2xl">
            <h2>House Rentals</h2>
            <ImageGallery items={houseRentals} />
          </div>
          <div className="phs-holiday-lettings mt-16 ">
            <h2 className=" text-2xl md:text-base">Holiday Lettings</h2>
            <ImageGallery items={holidayLettings} />
          </div>
        </div>
        <BottomNav />
      </>
    );
  }
}
export default Properties;

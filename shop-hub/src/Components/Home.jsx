import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import Products from "./Products";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <div>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
        >
          <div className="container-fluid">
            <img
              style={{ width: "100%", height: "70vh" }}
              src={require("./Images/img-1.jpg")}
              alt=""
            />{" "}
          </div>
          <div className="container-fluid">
            <img
              style={{ width: "100%", height: "70vh" }}
              src={require("./Images/img-3.jpg")}
              alt=""
            />{" "}
          </div>
          <div className="container-fluid">
            <img
              style={{ width: "100%", height: "70vh" }}
              src={require("./Images/img-4.jpg")}
              alt=""
            />{" "}
          </div>
          <div className="container-fluid">
            <img
              style={{ width: "100%", height: "70vh" }}
              src={require("./Images/img-4.jpg")}
              alt=""
            />{" "}
          </div>
        </Carousel>
      </div>

      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default Home;

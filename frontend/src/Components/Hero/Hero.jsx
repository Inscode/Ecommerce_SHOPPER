import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand.png";
import arrow_icon from "../Assets/newArrival.jpg";
import hero_image from "../Assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon}></img>
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} width={"50px"} height={"50px"}></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} className="main-image"></img>
      </div>
    </div>
  );
};

export default Hero;

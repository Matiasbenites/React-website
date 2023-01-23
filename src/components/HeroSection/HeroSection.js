import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import videoBg from "../../assets/videos/vid6.mp4";
import "animate.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={videoBg} autoPlay loop muted />
      <h1 className="animate__animated animate__fadeInDown">
        DISCOVER THE WORLD
      </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

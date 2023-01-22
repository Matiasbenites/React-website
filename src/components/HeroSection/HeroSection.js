import React from "react";
<<<<<<< HEAD
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import videoBg from "../../assets/videos/vid6.mp4";
import "animate.css";
=======
import "./App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
>>>>>>> refs/remotes/origin/main

function HeroSection() {
  return (
    <div className="hero-container">
<<<<<<< HEAD
      <video src={videoBg} autoPlay loop muted />
      <h1 className="animate__animated animate__fadeInDown">
        DISCOVER THE WORLD
      </h1>
=======
      <video src="/vids/vid2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
          buttonStyle="btn--outline"
=======
          buttonStyle="btn--primary"
>>>>>>> refs/remotes/origin/main
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

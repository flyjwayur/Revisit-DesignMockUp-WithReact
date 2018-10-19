import React from "react";
import headerImage from "../assets/Header-img.png";
import Banner from "./Banner";
import BannerButton from './BannerButton';
import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-background">
        <div className="header-container" id="top">
          <div className="left-header">
            <figure>
              <img id="computerHeader" src={headerImage} alt="computer-Header" />
            </figure>
          </div>
          <div className="right-header">
            <p>
              Powerfully simple
              <span>with a</span>
            </p>
            <br />
            <p>
              Squeeky clean
              <span>design</span>
            </p>
            <h4>
              Find out how you can offer quick and powerful solutions to your
              customers now!
            </h4>
            <button className="learn-btn" autoFocus={true}>
              Learn more
            </button>
          </div>
        </div>
        <Banner introText="Create a" highlight="powerful" endText="solution now!">
          <BannerButton buttonText="Get started"/>
        </Banner>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import './banner.css'; 
import BannerButton from './BannerButton.js'

function Banner(props) {

  return (
    <div className="speech-bubble">
      <p className="speech-bubble-text">
        {props.introText}  
        <span>{props.highlight}</span> 
        {props.endText}
      </p>
      <BannerButton buttonText={props.buttonText}/>
    </div>
  );
}

export default Banner;

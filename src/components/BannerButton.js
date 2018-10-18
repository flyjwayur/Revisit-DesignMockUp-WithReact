import React from 'react';
import './bannerButton.css';

function BannerButton(props){
  return (
    <button className="speechBubble-btn" autoFocus={true}>
    {props.buttonText}
  </button>
  )
}

export default BannerButton;
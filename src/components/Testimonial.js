import React from "react";
import './testimonial.css';

function Testimonial(props) {
  return (
    <div id={props.cssIdName}>
      <p className="testi-title">{props.testiTitle}</p>
      <p className="testi-content">
        {props.testiContent}
      </p>
    </div>
  );
}

export default Testimonial;
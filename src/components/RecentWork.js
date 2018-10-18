import React from "react";
import imgPlaceHolder from "../assets/img-placeholder.png";
import "./recentwork.css";

function RecentWork(props) {
  return (
    <div className={props.cssName}>
      <img src={imgPlaceHolder} alt="ImagePlaceholder" />
      <p className="blog-title">{props.blogTitle}</p>
      <p className="blog-content">
        {props.blogContent}
      </p>
    </div>
  );
}

export default RecentWork;

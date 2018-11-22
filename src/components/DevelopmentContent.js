import React from "react";
import "./developmentContent.css";
import PropTypes from "prop-types";

const DevelopmentContent = ({
  tabContentTitle,
  tabContentText
}) => {
  return (
    <div className="tabContent">
      <h3 className="tabContentTitle">{tabContentTitle}</h3>
      <p>{tabContentText}</p>
      <button>Read more</button>
    </div>
  );
};

DevelopmentContent.propTypes = {
  tabContentTitle: PropTypes.string.isRequired,
  tabContentText: PropTypes.string.isRequired
};

export default DevelopmentContent;

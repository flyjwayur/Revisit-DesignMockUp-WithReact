import React from "react";
import PropTypes from "prop-types";
import "./developmentTabs.css";
import DevelopmentContent from "./DevelopmentContent";

const DevelopmentTabs = ({
  tabId,
  tabLabel,
  tabContentTitle,
  tabContentText
}) => {
  const inputWithCheckOrWithout =
    tabId === "tab-1" ? (
      <input id={tabId} type="radio" name="tabs" defaultChecked />
    ) : (
      <input id={tabId} type="radio" name="tabs"/>
    );
  return (
    <div>
      {inputWithCheckOrWithout}
      <label className="tabLabel" htmlFor={tabId}>
        {tabLabel}
      </label>
      <DevelopmentContent
        tabContentTitle={tabContentTitle}
        tabContentText={tabContentText}
      />
    </div>
  );
};

DevelopmentTabs.propTypes = {
  tabId: PropTypes.string.isRequired,
  tabLabel: PropTypes.string.isRequired
};

export default DevelopmentTabs;

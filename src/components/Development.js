import React from "react";
import "./development.css";
import data from "../Data/davData";
import DevelopementTabs from "./DevelopmentTabs";

function Development() {
  return (
    <div className="developmentContainer">
      <div className="developmentTitle">
        <span>Development</span>
      </div>
      <div className="designProduction">
        <section className="tabs">
          <DevelopementTabs
            tabId={data.devContents.devContent1.id}
            tabLabel={data.devContents.devContent1.tabLabel}
            tabcheck={data.devContents.devContent1.tabcheck}
            tabContentTitle={data.devContents.devContent1.tabContent.title}
            tabContentText={data.devContents.devContent1.tabContent.text}
          />
          <DevelopementTabs
            tabId={data.devContents.devContent2.id}
            tabLabel={data.devContents.devContent2.tabLabel}
            tabcheck={data.devContents.devContent2.tabcheck}
            tabContentTitle={data.devContents.devContent2.tabContent.title}
            tabContentText={data.devContents.devContent2.tabContent.text}
          />
        </section>
      </div>
    </div>
  );
}

export default Development;

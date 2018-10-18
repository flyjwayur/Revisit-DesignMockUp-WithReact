import React from "react";
import './topicColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopicButton from './TopicButton.js'

function TopicColumn(props) {
  return (
    <div className="topic-container-column">
            <FontAwesomeIcon className="circle-bg-for-icon" icon={props.icon} />
      <div className="topic-title">
        {props.hightLightTitle}
        <span>{props.normalTitle}</span>
      </div>
      <div>
        <p>
          {props.description}
        </p>
      </div>
      <TopicButton buttonText="Read more"/>
    </div>
  );
}

export default TopicColumn;
import React from "react";
import './topicColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopicButton from './TopicButton.js';

function TopicColumn(props) {
  const { icon, hightLightTitle } = props;
  return (
    <div className="topic-container-column">
      <FontAwesomeIcon className="circle-bg-for-icon" icon={icon} />
      <div className="topic-title">
        {hightLightTitle}
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
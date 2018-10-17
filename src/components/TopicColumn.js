import React from "react";
import './topicColumn.css';

function TopicColumn() {
  return (
    <div className="topic-container-column">
      <div className="circle-bg-for-icon">
        <i className="fas fa-mobile-alt" />
      </div>
      <div className="topic-title">
        Superbly
        <span>responsive</span>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim
          ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem
          ex placerat augue, sed ullamcorper dolor arcu varius tellus.
        </p>
      </div>
      <button className="read-btn" autoFocus={true}>
        Read more
      </button>
    </div>
  );
}

export default TopicColumn;
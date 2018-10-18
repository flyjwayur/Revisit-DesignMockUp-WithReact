import React from "react";

function TopicButton(props) {
  return (
    <button className="read-btn" autoFocus={true}>
      {props.buttonText}
    </button>
  );
}

export default TopicButton;
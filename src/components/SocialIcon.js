import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialIcon.css';

function SocialIcon(props){
  let {icon, iconName} = props;
  return(
    <div className="mediaIcons">
      <FontAwesomeIcon className="iconSvg" icon={icon}/>
      <span className="iconName">{iconName}</span>
    </div>
  )
}

export default SocialIcon;
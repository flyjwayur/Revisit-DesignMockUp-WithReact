import React from 'react';
import './title.css';

function Title(props){
  let {cssName, titleText} = props;
  return ( 
    <div className={cssName}>
    <span>{titleText}</span>
  </div>
  )
}

export default Title;
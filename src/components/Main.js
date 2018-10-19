import React from "react";
import TopicColumn from "./TopicColumn.js";
//import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileAlt,
  faLaptop,
  faDesktop,
  faRecycle
} from "@fortawesome/free-solid-svg-icons";
import RecentWork from "./RecentWork.js";
import Testimonial from "./Testimonial.js";
import Development from "./Development.js";
import Title from "./Title"
import "./main.css";

//library.add(faMobileAlt, faLaptop, faDesktop, faRecycle);

function Main() {
  const dummy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus,
  nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.`;

  return (
    // Contents
    <div id="content-wrapper">
      {/* Topics */}
      <div className="topic-container">
        <TopicColumn
          icon={faMobileAlt}
          hightLightTitle="Superbly"
          normalTitle="responsive"
          description={dummy}
        />
        <TopicColumn
          icon={faLaptop}
          hightLightTitle="Squeeky"
          normalTitle="clean"
          description={dummy}
        />
        <TopicColumn
          icon={faDesktop}
          hightLightTitle="Multi"
          normalTitle="purpose"
          description={dummy}
        />
        <TopicColumn
          icon={faRecycle}
          hightLightTitle="Highly"
          normalTitle="flexible"
          description={dummy}
        />
      </div>
      {/* Recent work  */}
      <Title cssName="titleStyle" titleText="Recent work"/>
      <div className="recent-work-container">
        <RecentWork
          cssName="work1"
          blogTitle="Blog Title"
          blogContent={dummy}
        />
        <RecentWork
          cssName="work2"
          blogTitle="Blog Title"
          blogContent={dummy}
        />
        <RecentWork
          cssName="work3"
          blogTitle="Blog Title"
          blogContent={dummy}
        />
      </div>
      {/*Testimonials*/}
      <div id="Testimonials-development-container">
        <div id="testimonials-container">
          <div id="testimonials-title">
            <span>Testimonials</span>
          </div>
            <Testimonial
              cssIdName="testimonials-content1"
              testiTitle="Jonh Smith"
              testiContent={dummy}
            />
            <Testimonial
              cssIdName="testimonials-content2"
              testiTitle="Jonh Smith"
              testiContent={dummy}
            />
            <Testimonial
              cssIdName="testimonials-content3"
              testiTitle="Jonh Smith"
              testiContent={dummy}
            />
            <Testimonial
              cssIdName="testimonials-content4"
              testiTitle="Jonh Smith"
              testiContent={dummy}
            />
          </div>
        {/* Development  */}
        <Development />
      </div>
    </div>
  );
}

export default Main;

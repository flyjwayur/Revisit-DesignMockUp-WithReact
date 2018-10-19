import React from "react";
import "./footer.css";
import Banner from "./Banner.js";
import SocialIcon from './SocialIcon';
import { faTwitterSquare,
        faFacebookSquare,
        faVimeoSquare,
        faInstagram,
        faGooglePlusSquare,
        faPinterestSquare } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer>
      <Banner introText="GET IN TOUCH WITH US" highlight="Now" buttonText="Contact Us"/>
      <div className="footer-background">
        <div className="footer-container">
          <div className="aboutUs">
            <div className="footer-content-title">About Us</div>
            <div className="footer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dignissim ultrices hendrerit. Nulla cursus, nisi consectetur
              gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu
              varius tellus.
            </div>
            <div className="footer-content">
              123 Street Name <br />
              Road Name <br />
              Londdon <br />
              +44 74139 13807
            </div>
          </div>
          <div className="lastestTweets">
            <div className="footer-content-title">Lastest Tweets</div>
            <div className="footer-content">
              <span>@HyeSoo</span> Just subscribed another great item on
              #themeforest about 3 hours ago
            </div>
            <div className="footer-content">
              <span>@HyeSoo</span> Working on an awesome theme for #themeforest
              about 3 months ago
            </div>
          </div>
          <div className="lastestPosts">
            <div className="footer-content-title">Lastest Posts</div>
            <div className="footer-content-text-and-line">
              Lorem ipsum dolor sit amet
            </div>
            <div className="footer-content-text-and-line">
              consectetur adipiscing elit
            </div>
            <div className="footer-content-text-and-line">
              Nam dignissim ultrices hendrerit
            </div>
            <div
              className="footer-content-text-and-line"
              id="remove-bottom-line"
            >
              nisi consectetur gravida varius
            </div>
          </div>
          <div className="flickr">
            <div className="footer-content-title">Flickr</div>
            <div className="flickr-item-container">
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </div>
        </div>
        <div className="most-bottom-footer">
          <div className="footer-text">
            Copyright @2003-2012 Ventus Ivc. All Rights Reserved.
          </div>
          <div className="footer-icons">
          <SocialIcon icon={faTwitterSquare} iconName="Twitter"></SocialIcon>
          <SocialIcon icon={faFacebookSquare} iconName="Facebook"></SocialIcon>
          <SocialIcon icon={faVimeoSquare} iconName="Vimeo"></SocialIcon>
          <SocialIcon icon={faInstagram} iconName="Instagram"></SocialIcon>
          <SocialIcon icon={faGooglePlusSquare} iconName="Google+"></SocialIcon>
          <SocialIcon icon={faPinterestSquare} iconName="Pinterest"></SocialIcon>
          </div>
        </div>
        <div className="footer-up">
          <a href="#top">
            <i className="fas fa-arrow-circle-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

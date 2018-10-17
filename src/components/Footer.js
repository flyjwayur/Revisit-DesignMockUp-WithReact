import React from "react";
import "./footer.css";
import Banner from "./Banner.js";


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
            <i className="fab fa-twitter-square">
              <span>Twitter</span>
            </i>
            <i className="fab fa-facebook-square">
              <span>Facebook</span>
            </i>
            <i className="fab fa-vimeo-square">
              <span>Vimeo</span>
            </i>
            <i className="fab fa-instagram">
              <span>Instagram</span>
            </i>
            <i className="fab fa-google-plus-square">
              <span>Google+</span>
            </i>
            <i className="fab fa-pinterest-square">
              <span>Pinterest</span>
            </i>
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

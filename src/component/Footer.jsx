import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="fotter-cont">
      <div className="fotter-info">
        <div>
          <img src="./footer.logo.svg" alt="fotter logo" />
        </div>
        <div className="links">
          <ul>
            <li>Features</li>
            <span>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </span>
          </ul>
          <ul>
            <li>Resources</li>
            <span>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </span>
          </ul>
          <ul>
            <li>Company</li>
            <span>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </span>
          </ul>
        </div>
        <div className="icons">
          <span>
            <img src="./facebook.svg" alt="facebook" />
          </span>
          <span>
            <img src="./tweet.svg" alt="tweeter" />
          </span>
          <span>
            <img src="./pinterest.svg" alt="pinterest" />
          </span>
          <span>
            <img src="./instagram.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

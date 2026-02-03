import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <>
      <div className="hero-cont">
        <div className="hero-info">
          <h1>
            More than just <br /> shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed <br /> insights on
            how your links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src="./heroimg.svg" alt="hero img" />
        </div>
      </div>
      <div className="buttom-hero">
        <img src="./herobuttombg.svg" alt="link search " />
        <div className="search">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </div>
      </div>
    </>
  );
}

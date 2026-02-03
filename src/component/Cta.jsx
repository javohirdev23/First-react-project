import React from "react";
import "./cta.css";
export default function Cta() {
  return (
    <div className="cta">
      <img src="./ctaimg.svg" width={1280} alt="ctaimg" />
      <div className="info-cta">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}

import React from "react";
import "./main.css";
export default function Main() {
  return (
    <main className="main-section">
      <div className="info-top">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web <br />
          <span>with our advanced statistics dashboard.</span>
        </p>
      </div>
      <div className="cards-con">
        <div className="cards">
          <span></span>
          <div className="firstcard">
            <button>
              <img src="./brandreco.svg" alt="main first card" />
            </button>
            <h2>Brand Recognition</h2>
            <p>
              Boost your brand recognition with <br /> each click. Generic links
              don’t mean a <br /> thing. Branded links help instil <br />
              confidence in your content.
            </p>
          </div>
          <div className="secondcard">
            <button>
              <img src="./detailed.svg" alt="main second card" />
            </button>
            <h2>Detailed Records</h2>
            <p>
              Gain insights into who is clicking your <br /> links. Knowing when
              and where <br /> people engage with your content <br /> helps
              inform better decisions.
            </p>
          </div>
          <div className="thirdcard">
            <button className="thirdbtn">
              <img src="./fully.svg" alt="main third card" />
            </button>
            <h2>Fully Customizable</h2>
            <p>
              Improve brand awareness and <br /> content discoverability through{" "}
              <br />
              customizable links, supercharging <br /> audience engagement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

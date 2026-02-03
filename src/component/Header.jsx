import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="header-cont">
      <nav>
        <img src="./ShortlyLogo.svg" alt="shortly logo" />
        <ul>
          <a href="#">
            <li>Features</li>
          </a>

          <a href="#">
            <li>Pricing</li>
          </a>

          <a href="#">
            <li>Resources</li>
          </a>
        </ul>

        <div>
          <a href="#">Login</a>
          <a href="#">
            <button>Sign Up</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

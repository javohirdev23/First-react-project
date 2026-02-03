import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="header-cont">
      <nav>
        <img src="./ShortlyLogo.svg" alt="shortly logo" />
        <ul>
          <li>Features</li>

          <li>Pricing</li>

          <li>Resources</li>
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

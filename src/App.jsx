import React from "react";
import Header from "./component/Header";

import "./App.css";
import Hero from "./component/hero";
import Main from "./component/Main";
import Cta from "./component/Cta";
import Footer from "./component/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Cta />
      <Footer/>
    </>
  );
}

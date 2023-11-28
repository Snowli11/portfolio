import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Pascal Jeiziner",
  title: "B.Sc. Student in Biomedical Engineering",
  email: "pjeiziner@gmail.com",
  gitHub: "Snowli11",
  instagram: "",
  linkedIn: "",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#000000";
const secondaryColor = "#FFFFFF";

const App = () => {
  return (
      <div id="main">
        <div id="home">
          <Home name={siteProps.name} title={siteProps.title} />
        </div>
        <About />
        <div style={{ background: "Black" }}>
          <Portfolio />
          <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </div>
      </div>
  );
};

export default App;
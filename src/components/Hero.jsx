import React from "react";

import { content } from "../content/languages";

import "../styles/Hero.css";

import logo from "../images/icon.png";

const Hero = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="hero">
      <div className="hero-content-container">
        <img src={logo} alt="logo" className="hero-logo" />
        <h1 className="hero-title">{languageToUse.underTitle}</h1>
      </div>
    </div>
  );
};

export default Hero;

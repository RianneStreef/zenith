import React from "react";
import { content } from "../content/languages";

import "../styles/Intro.css";

import introImage from "../images/introImage.jpg";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="intro">
      <div className="intro-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
          condimentum aliquam. Proin tincidunt ullamcorper augue, et faucibus
          dolor lacinia nec. Phasellus feugiat ac tortor sit amet aliquam. Ut
          finibus lorem sed fringilla blandit. Sed odio nisi, efficitur quis
          placerat sit amet, blandit in sem. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vivamus ac
          tristique dui. Aliquam iaculis sem tincidunt, finibus mauris vitae,
          pharetra nulla. Mauris quis urna quis justo tempus elementum vitae non
          nulla. Nulla sodales elit id augue rhoncus, a viverra eros volutpat.
          Aenean vel varius nisl, sit amet rhoncus justo. Phasellus imperdiet
          sem ac ante porttitor, ac feugiat ipsum lacinia. Sed ac lacinia est.
          Ut et efficitur ex, vitae ultricies lectus. Pellentesque eget est
          erat. Curabitur vel sodales nisi. Aenean tincidunt nulla eu dapibus
          congue. Pellentesque vel placerat nisi. Sed non dui feugiat, tincidunt
          turpis sed, molestie eros. In commodo felis vel nisi vestibulum
          laoreet id vel arcu. Sed sit amet ante eget massa posuere suscipit.
          Quisque maximus hendrerit blandit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam erat volutpat. Vivamus porttitor
          diam eu odio dictum, non ornare libero dapibus.
        </p>
      </div>
      <img src={introImage} alt="" className="intro-image" />
    </div>
  );
};

export default Intro;

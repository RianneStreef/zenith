import React from "react";

import { content } from "../content/languages";

import "../styles/Services.css";

import bootfittingIntroImage from "../images/bootfittingIntroImage.jpg";
import modjoIntroImage from "../images/modjoIntroImage.jpg";
import ripNWudIntroImage from "../images/ripNWudIntroImage.jpg";

const Services = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="services">
      <div className="usp-intro bootfitting-intro">
        <div className="bootfitting-intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum condimentum aliquam. Proin tincidunt ullamcorper augue, et
            faucibus dolor lacinia nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed interdum condimentum aliquam. Proin tincidunt
            ullamcorper augue, et faucibus dolor lacinia nec.
          </p>
        </div>
        <img
          src={bootfittingIntroImage}
          alt="bootfitting"
          className="usp-intro-image"
        />
      </div>
      <div className="usp-intro modjo-intro">
        <div className="usp-intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum condimentum aliquam. Proin tincidunt ullamcorper augue, et
            faucibus dolor lacinia nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed interdum condimentum aliquam. Proin tincidunt
            ullamcorper augue, et faucibus dolor lacinia nec.
          </p>
        </div>
        <img
          src={modjoIntroImage}
          alt="ski modjo"
          className="usp-intro-image"
        />
      </div>
      <div className="usp-intro rip-n-wud-intro">
        <div className="usp-intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum condimentum aliquam. Proin tincidunt ullamcorper augue, et
            faucibus dolor lacinia nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed interdum condimentum aliquam. Proin tincidunt
            ullamcorper augue, et faucibus dolor lacinia nec.
          </p>
        </div>
        <img
          src={ripNWudIntroImage}
          alt="Rip 'n Wood"
          className="usp-intro-image"
        />
      </div>
    </div>
  );
};

export default Services;

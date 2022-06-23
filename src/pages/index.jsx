import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Contact from "../components/Contact";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  console.log(language);
  console.log(languageToUse);

  return (
    <div>
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <Hero language={language} languageToUse={languageToUse} />
      <Intro language={language} languageToUse={languageToUse} />
      <Services language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
      <a
        href="https://zenith-skishop.notresphere.com/location-materiel"
        target="blank"
        className="book-link"
      >
        {languageToUse.book}
      </a>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;

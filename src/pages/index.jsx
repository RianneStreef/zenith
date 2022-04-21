import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Layout from "../components/Layout";

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
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Portfolio from "components/portfolio/PortfolioAnimation";
import React, { useEffect, useState } from "react";
import { prototype } from "react-modal";
import { client } from "../../client";

export default function PortfolioSection() {
  const [portfolio, setPortfolio] = useState({
    title: "",
    description: "",
  });

  const getPortfolio = async () => {
    try {
      await client
        .getEntries({
          content_type: "sectionsGenericContent",
          "fields.section": "portfolio",
        })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setPortfolio(entries.items[0]?.fields);
            console.log('portfolio fields is ', entries.items[0]?.fields?.description);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div className="beny_tm_portfolio" id="portfolio">
      <div className="container">
        <div className="beny_tm_title_holder">
          <span>Portfolio</span>
          <h2>{portfolio.title}</h2>
          {portfolio.description && (
            <p>{documentToReactComponents(portfolio.description)}</p>
          )}
        </div>
        <Portfolio />
      </div>
    </div>
  );
}

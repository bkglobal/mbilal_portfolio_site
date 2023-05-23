import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { client } from "../../client";
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState(null);
  const [portfolio, setPortfolio] = useState([]);

  const getPortfolio = async () => {
    try {
      await client
        .getEntries({ content_type: "portfolio", order: "sys.createdAt" })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setPortfolio(entries.items);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  function toggleModal(description) {
    if (isOpen || !description) {
      setDescription(null);
    } else {
      setDescription(description);
    }
    setIsOpen(!isOpen);
  }

  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {/* projectDescription */}

          {portfolio
          .sort((a, b) => (a?.fields?.order > b?.fields?.order ? 1 : -1))
          .map((pf, index) => (
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
              key={pf?.fields?.order}
            >
              <div className="list_inner video">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={pf?.fields?.url}
                >
                  <h3>{pf?.fields?.projectName}</h3>
                  <span>
                    {documentToReactComponents(
                      pf?.fields?.shortDescription,
                      {}
                    )}
                  </span>
                </a>
                <img
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                  src={pf?.fields?.image?.fields?.file?.url}
                  alt="ImagePortfolio"
                  onClick={() => toggleModal(pf?.fields?.longDescription)}
                />
              </div>
            </li>
          ))}
        </ul>
        <PortfolioModal
          isOpen={isOpen && description}
          onToggle={toggleModal}
          description={description}
        />
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;

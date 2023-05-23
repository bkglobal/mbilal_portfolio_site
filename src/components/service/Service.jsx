import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { client } from "../../client";
import ServiceModal from "./ServiceModal";

Modal.setAppElement("#root");

const Service = () => {
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState(null);

  const getServices = async () => {
    try {
      await client
        .getEntries({ content_type: "service", order: "sys.createdAt" })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setServices(entries.items);
            console.log('services are ', entries.items)
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(description) {
    if (isOpen || !description) {
      setDescription(null);
    } else {
      setDescription(description);
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="service_list">
      <ul>
        {services
          .sort((a, b) => (a?.fields?.order > b?.fields?.order ? 1 : -1))
          .map((service) => (
            <li key={service?.fields?.order}>
              <div
                className="list_inner"
                // onClick={() => toggleModal(service?.fields?.detail)}
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <img
                  className="svg"
                  src={service?.fields?.icon?.fields?.file?.url}
                  alt=""
                />
                <div className="service_title">
                  <h3>{service?.fields?.name}</h3>
                </div>
                {service?.fields?.description && (
                  <div className="h6">
                    {documentToReactComponents(service?.fields?.description)}
                  </div>
                )}
              </div>
            </li>
          ))}
      </ul>
      {/* <ServiceModal
        isOpen={isOpen}
        onToggle={toggleModal}
        description={description}
      /> */}
    </div>
  );
};

export default Service;

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { client } from "../../client";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [services, setServices] = useState([]);
  const [description, setDescription] = useState(null);

  const getServices = async () => {
    try {
      await client.getEntries({ content_type: "service" }).then((entries) => {
        if (!!entries && !!entries.items) {
          setServices(entries.items);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  function toggleModal(description) {
    if (isOpen) {
      setDescription(null);
    } else {
      setDescription(description);
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="service_list">
      <ul>
        {services.map((service, index) => {
          <li key={index}>
            <div
              className="list_inner"
              onClick={() => toggleModal(service?.detail)}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img
                className="svg"
                src={service?.icon?.fields?.file?.url}
                alt=""
              />
              <div className="service_title">
                <h3>{service?.name}</h3>
              </div>
              
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ServiceAnimation;

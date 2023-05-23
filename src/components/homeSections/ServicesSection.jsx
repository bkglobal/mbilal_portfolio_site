import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Service from "components/service/Service";
import { useEffect, useState } from "react";
import { client } from "../../client";

export default function ServicesSection() {
  const [services, setServices] = useState({
    title: "",
    description: "",
  });

  const getServices = async () => {
    try {
      await client
        .getEntries({
          content_type: "sectionsGenericContent",
          "fields.section": "services",
        })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setServices(entries.items[0]?.fields);
            console.log('services .. . ', entries.items[0]?.fields)
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="beny_tm_services" id="service">
      <div className="container">
        <div className="beny_tm_title_holder">
          <span>Services</span>
          <h2>{services.title}</h2>
          {services.description && (
            <p>{documentToReactComponents(services.description)}</p>
          )}
        </div>
        <Service />
      </div>
    </div>
  );
}

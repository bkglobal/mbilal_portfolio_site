import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Address from "components/Address";
import Contact from "components/Contact";
import Service from "components/service/Service";
import SimpleSlider from "components/testimonial/Testimonial";
import { useEffect, useState } from "react";
import { client } from "../../client";

export default function ContactSection() {
  const [contact, setContact] = useState({
    title: "",
    description: "",
    phoneNumber: "",
    address: "",
    email: "",
    linkedinUrl: "",
    githubUrl: "",
    successMessage: "",
    failMessage: "",
  });

  const getContact = async () => {
    try {
      await client.getEntries({ content_type: "contact" }).then((entries) => {
        if (!!entries && !!entries.items) {
          setContact(entries.items?.[0]?.fields);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="beny_tm_contact" id="contact">
      <div className="container">
        <div className="contact_inner">
          <div className="left" data-aos="fade-right" data-aos-duration="1200">
            <div className="beny_tm_title_holder">
              <span>Contact</span>
              <h2>{contact.title}</h2>
            </div>
            <div className="short_list">
              <Address linkedinUrl={contact.linkedinUrl} email={contact.email} githubUrl={contact.githubUrl} />
            </div>
          </div>
          {/* End .left */}

          <div
            className="right"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <div className="title">
              <p>
                {documentToReactComponents(contact.description)}
              </p>
            </div>
            <div className="fields">
              <Contact successMessage={contact.successMessage} failMessage={contact.failMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import {client} from '../client';

const SocialTwo = () => {
  const [contact, setContact] = useState({
    linkedinUrl: "",
    githubUrl: "",
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
    <ul>
      <li>
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="first">
            <FiLinkedin />
          </span>
          <span className="second">
            <FiLinkedin />
          </span>
        </a>
      </li>
      <li>
        <a  href={contact.githubUrl} target="_blank" rel="noreferrer">
          <span className="first">
            <FiGithub />
          </span>
          <span className="second">
            <FiGithub />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialTwo;

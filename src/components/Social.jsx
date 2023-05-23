import React, { useEffect, useState } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import {client} from '../client';

const SocialShare = [
  { iconName: <FiGithub />, link: "" },
  {
    iconName: <FiLinkedin />,
    link: "",
  },
];
const Social = () => {

  const [contact, setContact] = useState({
    title: "",
    description: "",
    phoneNumber: "",
    address: "",
    email: "",
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
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

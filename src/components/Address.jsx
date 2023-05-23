import React from "react";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';

const Address = ({linkedinUrl, githubUrl, email}) => {
  return (
    <ul>
     
      {/* End li */}

      <li>
        <AiOutlineMail className="ri_svg" color="#f52225"/>
        <span>
          <a href="mailto:ib-themes21@gmail.com">{email}</a>
        </span>
      </li>
      <li>
        <AiFillLinkedin className="ri_svg" color="#f52225"/>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">{linkedinUrl}</a>
      </li>
      {/* End li */}

      <li>
        <AiFillGithub className="ri_svg" color="#f52225"/>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          {githubUrl}
        </a>
      </li>
    </ul>
  );
};

export default Address;

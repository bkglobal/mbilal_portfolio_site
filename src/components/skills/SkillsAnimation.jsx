import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { client } from "../../client";

const educationContent = [
  {
    passingYear: "2020-2021",
    degree: "Ph.D in Horriblensess ",
    instituteName: "Harvard University, Cambridge, MA",
  },
  {
    passingYear: "2018-2019",
    degree: "Computer Science",
    instituteName: "Imperialize Technical Institute",
  },
  {
    passingYear: "2016-2018",
    degree: "Graphic Designer",
    instituteName: "Web Graphy, Los Angeles, CA",
  },
];

// const skillsContent = [
//   {
//     name: "Web Design",
//     skillPercent: "85",
//   },
//   {
//     name: "Mobile App",
//     skillPercent: "55",
//   },
//   {
//     name: "Illustrator",
//     skillPercent: "65",
//   },
//   {
//     name: "Photoshop",
//     skillPercent: "72",
//   },
//   {
//     name: "Motion Graphy",
//     skillPercent: "80",
//   },
// ];

const experienceContent = [
  {
    designation: "Sr. Software Tester",
    jobType: "Full Time | Remote",
    year: "2020 - Present",
    compnayName: "Google Inc.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Sr. Graphic Designer",
    jobType: "Part Time | Office",
    year: "2018 - 2019",
    compnayName: "Avada Theme.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
  {
    designation: "Cr. Web Developer",
    jobType: "Full Time | InHouse",
    year: "2016 - 2017",
    compnayName: "ib-themes ltd.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "",
  },
  {
    designation: "Jr. Web Developer",
    jobType: "Full Time | Remote",
    year: "2014 - 2015",
    compnayName: "Creative Gigs.",
    descriptions:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  const [experience, setExperience] = useState([]);

  const getExperience = async () => {
    try {
      await client
        .getEntries({ content_type: "experience" })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setExperience(entries.items);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("experience", experience);

  useEffect(() => {
    getExperience();
  }, []);
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>

        <div className="row">
          {experience
            .sort((a, b) => (a?.fields?.order > b?.fields?.order ? 1 : -1))
            .map((exp, i) => (
              <div
                className="col-6"
                key={exp?.fields?.order}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={""}
              >
                <div className="resume-box-01">
                  <h5>{exp?.fields?.designation}</h5>
                  <h6>{exp?.fields?.jobType}</h6>
                  <span>{exp?.fields?.timespan}</span>
                  <div className="hr"></div>
                  <h4>
                    <label>{exp?.fields?.company}</label>
                  </h4>
                  <p>{documentToReactComponents(exp?.fields.description)}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SkillsAnimation;

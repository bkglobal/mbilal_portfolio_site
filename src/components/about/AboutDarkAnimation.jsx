import React, { useState, useEffect } from "react";
import Skills from "../skills/SkillsAnimation";
import { useMediaQuery } from "react-responsive";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutDarkAnimation = () => {
  // About Api fetch

  const [about, setAbout] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const getAbout = async () => {
    try {
      await client.getEntries({ content_type: "services" }).then((entries) => {
        if (!!entries) {
          setAbout(entries);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Name = about && about.items && about?.items[0].fields?.name;
  const Field = about && about.items && about?.items[0].fields?.field;
  const City = about && about.items && about?.items[0].fields?.city;
  const Aboutme =
    about && about.items && about?.items[0].fields?.aboutmeMain;
  console.log('about me is ', Aboutme);
  // Education Api fetch

  const getEducation = async () => {
    try {
      await client.getEntries({ content_type: "education" }).then((entries) => {
        if (!!entries) {
          setEducation(entries);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("education me is .. ", education);

  const Degree =
    education &&
    education.items &&
    education?.items[1].fields?.degree?.content[0]?.content[0]?.value;
  const University =
    education &&
    education.items &&
    education?.items[1].fields?.university?.content[0]?.content[0]?.value;
  const Year =
    education &&
    education.items &&
    education?.items[1].fields?.year?.content[0]?.content[0]?.value;

    const Degree2 =
    education &&
    education.items &&
    education?.items[0].fields?.degree?.content[0]?.content[0]?.value;
  const University2 =
    education &&
    education.items &&
    education?.items[0].fields?.university?.content[0]?.content[0]?.value;
  const Year2 =
    education &&
    education.items &&
    education?.items[0].fields?.year?.content[0]?.content[0]?.value;

  // Education Api fetch

  const getSkills = async () => {
    try {
      await client.getEntries({ content_type: "skills" }).then((entries) => {
        if (!!entries && !!entries.items) {
          console.log(" entry items ", entries.items);
          setSkills(entries.items);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  // {
  //   !!data?.items && data?.items[0]?.fields?.backgroundImage?.fields?.file?.url
  //     ? data?.items[0]?.fields?.backgroundImage?.fields?.file?.url
  //     : "www.google.com";
  // }
  const skillNames =
    !!skills?.items && skills?.items[0]?.fields?.skills
      ? skills?.items[0]?.fields?.skills
      : "";

  useEffect(() => {
    getAbout();
    getEducation();
    getSkills();
  }, []);
  const Desktop = useMediaQuery({ minWidth: 1040 });

  return (
    <>
      <div
        className="about_inner row"
        style={{
          alignItems: "stretch",
        }}
      >
        <div
          className="col-6"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>I'm {Name}</h3>
            <h5>
              A <span className="theme-color">{Field} </span>
              based in <span className="theme-color">{City}</span>
            </h5>
            <p>
              {Aboutme && documentToReactComponents(Aboutme)}
              {/* I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio */}
            </p>
          </div>
          <div className="extra">
            <div className="education ">
              <div
                className="edu_list"
                style={{
                  backgroundColor: "#111319",
                  padding: "35px",
                  borderRadius: "7px",
                }}
              >
                <h4>
                  <label>Education</label>
                </h4>
                <ul style={{ listStyle: "none" }}>
                  {/* {educationContent.map((val, i) => (
                    <li key={i}>
                      <span className="year">{val.passingYear}</span>
                      <p>
                        <span>{val.degree}</span> - {val.instituteName}
                      </p>
                    </li>
                  ))} */}

                  <li>
                    <div className="year" style={{ paddingBottom: 10 }}>
                      <h5>{University}</h5>
                    </div>
                    <p>
                      <span>{Degree}</span> <br />
                      {Year}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="extra">
            <div className="education ">
              <div
                className="edu_list"
                style={{
                  backgroundColor: "#111319",
                  padding: "35px",
                  borderRadius: "7px",
                }}
              >
                <h4>
                  <label>Education</label>
                </h4>
                <ul style={{ listStyle: "none" }}>
                  {/* {educationContent.map((val, i) => (
                    <li key={i}>
                      <span className="year">{val.passingYear}</span>
                      <p>
                        <span>{val.degree}</span> - {val.instituteName}
                      </p>
                    </li>
                  ))} */}

                  <li>
                    <div className="year" style={{ paddingBottom: 10 }}>
                      <h5>{University2}</h5>
                    </div>
                    <p>
                      <span>{Degree2}</span> <br />
                      {Year2}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            style={{
              backgroundColor: "#111319",
              padding: 35,
              borderRadius: "7px",
              height: "100%",
            }}
            className="h-full"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="skills ">
              <h4>
                <label>Skills</label>
              </h4>
              <div className="beny_progress">
                {skills
                  .sort((a, b) =>
                    a?.fields?.order > b?.fields?.order ? 1 : -1
                  )
                  .map((skill) => (
                    <div className="progress_inner" key={skill?.fields?.order}>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="label">
                          {skill?.fields?.name}
                        </span>
                        <span className="number">
                          {skill?.fields?.experienceInYears}
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{
                              width:
                                (skill?.fields?.experienceInPercentage || 100) +
                                "%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutDarkAnimation;

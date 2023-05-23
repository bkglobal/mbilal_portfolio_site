import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import ReactTyped from "react-typed";
import { aboutMeData } from "views/all-home-version/data/aboutMe";

const SliderDarkAnimation = ({}) => {
  const sliderProps = aboutMeData;
  //const background = sliderProps?.backgroundImage?.fields?.file?.url;
  const background = aboutMeData.backgroundImage;
  //const Introtext = sliderProps?.introText?.content[0]?.content[0]?.value;
  const Introtext = aboutMeData.introText;

  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Hello I'm
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              {sliderProps?.intro}
              {/* Tahlia McGrath */}
            </h1>
            <h2
              style={{ color: "red" }}
              className="typer"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <ReactTyped
                loop
                typeSpeed={60}
                backSpeed={40}
                // strings={[
                //   "Senior Software Engineer",
                //   "Web App Development",
                //   "Mobile App Development",
                //   "CMS & eCommerce Website Development",
                // ]}
                strings={[
                  `${
                    !!sliderProps &&
                    sliderProps?.expertise &&
                    sliderProps?.expertise[0]
                      ? sliderProps?.expertise[0]
                      : "Senior Software Engineer"
                  }`,
                  `${
                    !!sliderProps &&
                    sliderProps?.expertise &&
                    sliderProps?.expertise[1]
                      ? sliderProps?.expertise[1]
                      : ""
                  }`,
                  `${
                    !!sliderProps &&
                    sliderProps?.expertise &&
                    sliderProps?.expertise[2]
                      ? sliderProps?.expertise[2]
                      : ""
                  }`,
                  `${
                    !!sliderProps &&
                    sliderProps?.expertise &&
                    sliderProps?.expertise[3]
                      ? sliderProps?.expertise[3]
                      : ""
                  }`,
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </h2>

            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              {Introtext}
              {/* {topCard.introText.content[0].content[0].value} */}
              {/* I design
              and develop services for customers of all sizes, specializing in
              creating stylish, modern websites, web services and online stores. */}
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Social />
            </div>
            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#portfolio">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <SocialTwo />
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderDarkAnimation;

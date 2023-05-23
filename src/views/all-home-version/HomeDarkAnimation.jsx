import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/HeaderDark";
import Slider from "../../components/slider/SliderDarkAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Service from "../../components/service/ServiceAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";
import { UserInfoContext } from "components/context/UserInfo";
import ServicesSection from "components/homeSections/ServicesSection";
import PortfolioSection from "components/homeSections/PortfolioSection";
import TestimonialsSection from "components/homeSections/TestimonialsSection";
import ContactSection from "components/homeSections/ContactSection";

const HomeDarkAnimation = () => {
  document.body.classList.add("dark");

  //const { aboutMe } = useContext(UserInfo);
  const { aboutMe } = useContext(UserInfoContext);

  // const [data, setData] = useState([]);
  // // await client.getEntries({ content_type: "aboutMe" }).then((entries) => {
  //
  // const getAllentries = async () => {
  //   try {
  //     await client.getEntries({ content_type: "aboutMe" }).then((entries) => {
  //       console.log("entries aboutme", entries);
  //
  //       if (!!entries) {
  //         setData(entries);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //
  // useEffect(() => {
  //   getAllentries();
  // }, []);

  const data = (aboutMe && aboutMe) || [];

  console.log("main", data && data.items);
  // console.log("main aboutMe", aboutMe);

  const sliderProps = data && data.items && data?.items[0].fields;

  return (
    <div className="home-light" id="root">
      <Header />
      {/* End Header */}

      <Slider sliderProps={sliderProps} />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>About Me</span>
            <h2>About Me</h2>
            {/* {!!data?.items &&
            data?.items[0]?.fields?.backgroundImage?.fields?.file?.url
              ? data?.items[0]?.fields?.backgroundImage?.fields?.file?.url
              : "www.google.com"} */}
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      <ServicesSection />
      {/* /SERVICES */}

      {/* PORTFOLIO */}
      <PortfolioSection />
      {/* /PORTFOLIO */}

      {/* TESTIMONIALS */}
      <TestimonialsSection />
      {/* /TESTIMONIALS */}

      {/*  CONTACT */}
      <ContactSection />
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      {/* <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div> */}
      {/* /COPYRIGHT */}
    </div>
  );
};

export default HomeDarkAnimation;

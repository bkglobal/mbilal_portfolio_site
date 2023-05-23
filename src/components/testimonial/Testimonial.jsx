import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from '../../client';

export default function SimpleSlider() {
  const [testimonial, setTestimonial] = useState([]);

  const getTestimonial = async () => {
    try {
      await client.getEntries({ content_type: "testimonial", order:'sys.createdAt' }).then((entries) => {
        if (!!entries && !!entries.items) {
          setTestimonial(entries.items);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonial();
  }, []);


  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "1",
      desc: `Hi, I’m Alvara Atkins and I am designer &amp; developer who dream making the world better place by products. I am also very active for international clients.`,
      name: "Alvara Atkins",
      designation: "Marketing Manager",
    },
    {
      img: "2",
      desc: `This is outstanding work. Everything I needed to do has been done by the makers. I really like this template and more importantly my clients are blown away by it.`,
      name: "Fabian Gattuzo",
      designation: "Photographer",
    },
    {
      img: "3",
      desc: `These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!`,
      name: "Alizee Bonita",
      designation: "App Developer",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonial.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tBackImg" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    val?.fields?.clientImage?.fields?.file?.url
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val?.fields?.clientRemark}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val?.fields?.client}</span>
                </h3>
                <span className="job">{val?.fields?.clientDesignation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

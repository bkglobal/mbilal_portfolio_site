import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SimpleSlider from "components/testimonial/Testimonial";
import { useEffect, useState } from "react";
import { client } from "../../client";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState({
    title: "",
    description: "",
  });

  const getTestimonials = async () => {
    try {
      await client
        .getEntries({
          content_type: "sectionsGenericContent",
          "fields.section": "testimonial",
        })
        .then((entries) => {
          if (!!entries && !!entries.items) {
            setTestimonials(entries.items[0]?.fields);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className="beny_tm_testimonials">
      <div className="container">
        <div className="beny_tm_title_holder">
          <span>Testimonials</span>
          <h2>{testimonials.title}</h2>
          {testimonials.description && (
            <p>{documentToReactComponents(testimonials.description)}</p>
          )}
        </div>
        {/* End beny_tm_title */}
        <div
          className="testimonials_list"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

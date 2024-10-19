import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import ServiceCard from "./../../Component/SericeCard/ServiceCard";
import Slider from "react-slick"; // Import the carousel

import webIcon from "./../../assets/Images/coding.png";
import seoIcon from "./../../assets/Images/seo.png";
import socialmediaIcon from "./../../assets/Images/social-media_13561895.png";
import marketingIcon from "./../../assets/Images/marketing.png";
import BrandingIcon from "./../../assets/Images/branding.png";
import logoIcon from "./../../assets/Images/logoIcon.png";

const services = [
  {
    icon: webIcon,
    title: "Web Development",
    description: "Creating stunning, user-friendly websites that convert.",
  },
  {
    icon: seoIcon,
    title: "Search Engine Marketing",
    description: "Optimizing your website for search engines to drive organic traffic.",
  },
  {
    icon: marketingIcon,
    title: "Digital Marketing",
    description: "Boosting your online visibility through SEO, PPC, and social media.",
  },
  {
    icon: socialmediaIcon,
    title: "Social Media Marketing",
    description: "Engaging your target audience on popular social platforms.",
  },
  {
    icon: BrandingIcon,
    title: "Branding",
    description: "Developing strong brand identities that resonate with your audience.",
  },
  {
    icon: logoIcon,
    title: "Logo Creation",
    description: "Designing unique logos that capture the essence of your brand.",
  },
];

const Service = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after component mounts
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={styles.mainService}>
      <h1 className={`${styles.movingText} ${animate ? styles.show : ""}`}>
        Our Comprehensive Marketing Services
      </h1>
      <br />
      <p className={`${styles.movingText} ${animate ? styles.show : ""}`}>
        We focus on crafting digital experiences that drive the growth of your
        business. Through our designs, we create a path for your business to
        expand and thrive in the digital landscape.
      </p>

      <div className={styles.mainServicesub}>
        {/* Conditional rendering based on screen size */}
        {window.innerWidth < 768 ? (
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className={styles.carouselItem}>
                <img src={service.icon} alt={service.title} className={styles.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </Slider>
        ) : (
          services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
              description={service.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Service;

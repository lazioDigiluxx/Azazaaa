import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import ServiceCard from "./../../Component/SericeCard/ServiceCard";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import webIcon from "./../../assets/Images/coding.png";
import seoIcon from "./../../assets/Images/seo.png";
import socialmediaIcon from "./../../assets/Images/social-media_13561895.png";
import marketingIcon from "./../../assets/Images/marketing.png";
import BrandingIcon from "./../../assets/Images/branding.png";
import logoIcon from "./../../assets/Images/logoIcon.png";

const Service = () => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(animationTimer);
  }, []);

  if (loading) {
    return (
      <div style={{
        backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ClimbingBoxLoader color="#ff0000" size={35} aria-label="Loading services" />
      </div>
    );
  }

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
        <ServiceCard
          icon={webIcon}
          title="Web Development"
          href="/services/web-development"
          description="Creating stunning, user-friendly websites that convert."
        />
        
        <ServiceCard
          icon={seoIcon}
          title="Search Engine Marketing"
          href="/services/seo-optimization"
          description="Optimizing your website for search engines to drive organic traffic."
        />

        <ServiceCard
          icon={marketingIcon}
          title="Digital Marketing"
          href="/services/graphic-design"
          description="Boosting your online visibility through SEO, PPC, and social media."
        />

        <ServiceCard
          icon={socialmediaIcon}
          title="Social Media Marketing"
          href="/services/social-media-marketing"
          description="Engaging your target audience on popular social platforms."
        />

        <ServiceCard
          icon={BrandingIcon}
          title="Branding"
          href="/services/branding"
          description="Developing strong brand identities that resonate with your audience."
        />

        <ServiceCard
          icon={logoIcon}
          title="Logo Creation"
          href="/services/logo-creation"
          description="Designing unique logos that capture the essence of your brand."
        />
      </div>
    </div>
  );
};

export default Service;

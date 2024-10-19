import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import ServiceCard from "./../../Component/SericeCard/ServiceCard";

import webIcon from "./../../assets/Images/coding.png";
import seoIcon from "./../../assets/Images/seo.png";
import socialmediaIcon from "./../../assets/Images/social-media_13561895.png";
import marketingIcon from "./../../assets/Images/marketing.png"
import BrandingIcon from "./../../assets/Images/Branding.png"
import logoIcon from "./../../assets/Images/logoIcon.png"
const Service = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after component mounts
    }, 100); // Delay to ensure component has rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.mainService}>
      <h1 className={`${styles.movingText} ${animate ? styles.show : ""}`}>
      Our Comprehensive Marketing Services
      </h1>
      <br/>
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
          title="Search Engine marketing"
          href="/services/seo-optimization"
          description="Optimizing your website for search engines to drive organic traffic."
        />
        <ServiceCard
          icon={marketingIcon}
          title="Digital marketing"
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
          href="/services/social-media-marketing"
          description="Developing strong brand identities that resonate with your audience."
        />
        
       
        <ServiceCard
          icon={logoIcon}
          title="Logo Creation"
          href="/services/social-media-marketing"
          description="Designing unique logos that capture the essence of your brand."
        />
          
      </div>
    </div>
  );
};

export default Service;

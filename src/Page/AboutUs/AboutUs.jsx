import React, { useState, useEffect } from 'react';
import styles from './AboutUs.module.css';
import Card from '../../Component/AboutMotion/Card';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  const cardTexts = [
    "Our team has years of experience in web development, digital marketing, branding, and more.",
    "We tailor our services to meet the unique needs of your business.",
    "Our focus is on delivering measurable results that drive growth."
  ];



  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
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
        <ClimbingBoxLoader color="#ff0000" size={35} />
      </div>
    );
  }

  return (
    <div className={styles.aboutUsMain}>
      <div className={styles.heroSection}>
        <h1 className={styles.heading}>
          <span className={styles.line1}>Your Partner in </span>
          <span className={styles.line3}>Digital Success</span>
        </h1>
        <p className={styles.subText}>
          Azaza is a leading marketing agency based in Kochi, specializing in providing innovative and effective solutions to businesses of all sizes. 
          With a team of experienced professionals, we are dedicated to helping you achieve your marketing goals and grow your brand.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {cardTexts.map((text, index) => (
          <Card key={index} text={text} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

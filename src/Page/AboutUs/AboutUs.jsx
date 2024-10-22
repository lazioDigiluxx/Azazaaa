import React from 'react';
import styles from './AboutUs.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import Card from '../../Component/AboutMotion/Card';
import logo from "./../../assets/Images/logo.png";
import Footer from '../../Component/Footer/Footer';

import Testimonals from '../../Component/Slider/Slider';
const AboutUs = () => {
  const cardTexts = [

    "Our team has years of experience in web development, digital marketing, branding, and more.",
    "We tailor our services to meet the unique needs of your business.",
    "Our focus is on delivering measurable results that drive growth."

  ];

  return (
    <div className={styles.aboutUsMain}>
      {/* <img src={logo} alt="Company Logo" className={styles.logoImg} /> */}
      {/* <NavBar />  */}
      <div className={styles.heroSection}>
        <h1 className={styles.heading}>
      
          <span className={styles.line1}>Your Partner in </span>
          {/* <span className={styles.line2}></span> */}
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

      {/* <Testimonals/> */}
     
    </div>
  );
};

export default AboutUs;

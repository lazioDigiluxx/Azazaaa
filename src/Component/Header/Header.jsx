import React from "react";
import styles from "./Header.module.css";
import backgroundVideo from "./../../assets/Images/backVideo.mp4";
import { TypeAnimation } from "react-type-animation";
import logo from "./../../assets/Images/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header_main}>
      <video autoPlay muted loop className={styles.background_video}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}>
          Promote Your Brand <br /> with Azaza Marketing Solutions
        </h1>
        <div className={styles.left}>
        <h2>
          Expert In
          <br />
          <span style={{ display: "inline-block" }}>
            <TypeAnimation
              sequence={[
                "Web Development",
                1000,
                "Graphic designing",
                1000,
                "SEO",
                1000,
                "Social Media Marketing",
                1000,
              ]}
              style={{ fontSize: "1.5em", marginLeft: "10px", color: "white" }}
              repeat={Infinity}
            />
          </span>{" "}
          <br />
          Needs!!
        </h2>
      </div>
        <br/>
        <Link to="/contact" className={styles.cta_button}>
          Get Started
        </Link>
      </div>

      {/* Marquee Text */}
      <div className={styles.marquee}>
        <span>
          Digital Marketing &nbsp; | &nbsp; Web Solutions &nbsp; | &nbsp; SEO
          &nbsp; | &nbsp; Digital Marketing &nbsp; | &nbsp; Web Solutions &nbsp;
          | &nbsp; SEO &nbsp; | &nbsp; Digital Marketing &nbsp; | &nbsp; Web
          Solutions &nbsp; | &nbsp; SEO &nbsp; | &nbsp;
        </span>
      </div>
    </div>
  );
};

export default Header;

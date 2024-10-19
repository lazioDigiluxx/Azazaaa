import React from "react";
import styles from "./Footer.module.css";
import logo from "./../../assets/Images/logo.png";
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import FooterImageWhtUp from "./../../assets/Images/chat-bubble_17747616.png";
import CallButtonIcon from "./../../assets/Images/calling_9968470.png";

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContent}>
        {/* First Column: Logo and Social Media Links */}
        <div className={styles.firstFooter}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logoImg} />
          </div>
          <div className={styles.socialMedia}>
            <ul>
              <li>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Column: Information Section */}
        <div className={styles.secondFooter}>
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Third Column: Contact Us Section */}
        <div className={styles.thirdFooter}>
          <h4>Contact Us</h4>
          <p>
            Kannoth building, near Darussalam School, Vallathol Junction,
            Thrikkakara, P.O, Kochi, Kerala 682021
            <br />
            Phone: +91 7736558999
            <br />
            Email: laziodigilux@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <p>&copy; Copyright @ 2023 and All rights reserved by Lazio Digilux</p>
      </div>

      {/* Floating WhatsApp and Call Button */}
      <a
        href="https://wa.me/+919113523278"
        className={styles.w_app}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={FooterImageWhtUp} alt="WhatsApp Icon" className={styles.whatsappFixImg} />
      </a>

      <a href="tel:+919544044544" className={styles.callButton}>
        <img src={CallButtonIcon} alt="Call Icon" className={styles.callFixImg} />
      </a>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "./../../assets/Images/logo.png"
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setOpen(false); // Close the menu if resized to desktop
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
       <Link to="/" className={styles.logoContainer}>
                        <img src={logo} alt="Logo" />
      </Link>
      <div  className={styles.menuIcon} onClick={handleMenuToggle}>
        {open ? <RiCloseLargeFill /> : <GrMenu />}
      </div>

      <ul className={`${styles.navList} ${open && isMobile ? styles.showMenu : ''}`}>
        <li>
          <Link to="/" className={styles.navLink} onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink} onClick={() => setOpen(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/services" className={styles.navLink} onClick={() => setOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink} onClick={() => setOpen(false)}>Contact Us</Link>
        </li>
      </ul>

     
    </nav>
  );
};

export default NavBar;

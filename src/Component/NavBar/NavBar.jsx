import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from './../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import { TiThMenuOutline } from 'react-icons/ti';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
      setOpen(prev => !prev); // Toggle the open state
      console.log(open ? "closed!!!" : "opened!!!");
  };

  return (
    <>
      <nav className={styles.nav}>
      
        <ul className={`${styles.navList} ${open ? styles.showMenu : ''}`}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>About Us</Link>
          </li>
          <li>
            <Link to="/services" className={styles.navLink}>Services</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navLink}>Contact Us</Link>
          </li>
        <div className={styles.menuIcon} onClick={handleMenuToggle}>
          <GrMenu />
        </div>
      
        </ul>
        
      </nav>
    </>
  );
};

export default NavBar;

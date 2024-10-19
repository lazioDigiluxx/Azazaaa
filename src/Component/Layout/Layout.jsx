import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './../../Component/Footer/Footer'; 
import logo from "./../../assets/Images/logo.png";
import styles from "./Layout.module.css";
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";

const Layout = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(true);
        console.log("opened!!!");
    };

    const handleClose = () => {
        setOpen(false);
        console.log("closed!!!");
    };

    return (
        <div className={styles.layout}>
            {/* Stickbar */}
            <div className={styles.stickBar}>
                <Link to={'/'} className={styles.logoContainer}>
                    <img src={logo} alt="Logo" />
                </Link>
                {/* Icon container */}
                <div className={styles.menuIcon} onClick={handleMenu}>
                    <CgMenuGridO />
                </div>
            </div>

            {/* Page content */}
            <div className={styles.content}>
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />

            {/* Full-page Menu Overlay */}
            {open && (
                <div className={styles.menuOverlay}>
                    <div className={styles.menuContent}>
                        <h2>Menu</h2>
                        <ul>
                            <li><Link to="/" onClick={handleClose}>Home</Link></li>
                            <li><Link to="/about" onClick={handleClose}>About Us</Link></li>
                            <li><Link to="/services" onClick={handleClose}>Services</Link></li>
                            <li><Link to="/contact" onClick={handleClose}>Contact Us</Link></li>
                            <li><Link to="/careers" onClick={handleClose}>Careers</Link></li>
                        </ul>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout;

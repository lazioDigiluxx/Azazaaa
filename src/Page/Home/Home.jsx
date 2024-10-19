import React from 'react';
import styles from './Home.module.css';
import Header from '../../Component/Header/Header';
import NavBar from '../../Component/NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../../Component/Footer/Footer';
import Service from '../Services/Service';
import Project from '../../Component/Projectidea/Project';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className={styles.main}>
      <NavBar />

      {/* Wrap sections with Element for smooth scrolling */}
      <Element name="headerSection">
        <Header />
      </Element>

      <Element name="aboutSection">
        <AboutUs />
      </Element>

      <Element name="serviceSection">
        <Service />
      </Element>

      <Element name="projectSection">
        <Project />
      </Element>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

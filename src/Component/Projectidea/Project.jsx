import React from 'react';
import styles from "./Project.module.css";
import Idea from "./../../Animations/Idea.json";
import Lottie from 'lottie-react';

const Project = () => {
  return (
    <div className={styles.mainProject}>
      <Lottie
        animationData={Idea}
        loop={true}
        style={{ width: '300px', height: '300px', overflow: 'hidden' }} // Adjust size as needed
      />
      <h1>Have a Project Idea?</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.callButton}>Call Us</button>
      </div>
    </div>
  );
};

export default Project;

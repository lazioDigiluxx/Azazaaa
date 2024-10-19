import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import im from "./../../assets/Images/team.jpg";

function Card({ text, description, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <div className={styles.imageContainer}>
        <img src={im} alt={text} className={styles.cardImage} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.cardTitle}>{text}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}

export default Card;

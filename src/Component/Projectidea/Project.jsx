import React, { useState } from 'react';
import styles from "./Project.module.css";
import Idea from "./../../Animations/Idea.json";
import Lottie from 'lottie-react';
import Modal from 'react-modal';
import { InlineWidget } from 'react-calendly';

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '55%',
      height: '75%',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      borderRadius: '12px',
      border: 'none',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: '999',
    },
  };

  return (
    <div className={styles.mainProject}>
      <Lottie
        animationData={Idea}
        loop={true}
        style={{ width: '300px', height: '300px', overflow: 'hidden' }}
      />
      <h1>Have a Project Idea?</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.callButton} onClick={handleOpenModal}>Schedule a Call</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <button onClick={handleCloseModal} className={styles.closeModalButton}>✖</button>
        
        {/* Calendly Inline Widget */}
        <InlineWidget
          url="https://calendly.com/lazioteamkochi/30min"
          styles={{ width: '100%', height: '500px' }}
        />
      </Modal>
    </div>
  );
};

export default Project;

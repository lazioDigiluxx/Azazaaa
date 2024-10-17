import React, { useState } from 'react';
import styles from './ServiceCard.module.css';
import { InlineWidget } from 'react-calendly';  // Import Calendly widget
import Modal from 'react-modal';               // Import Modal for popup

const SericeCard = ({ icon, title, description }) => {
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
      height:'75%',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',  // Black with slight transparency
      color: 'white',                          // White text for contrast
      borderRadius: '12px',                    // Softer, rounded edges
      border: 'none',                          // Remove default border for cleaner look
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Add subtle shadow for depth
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',   // Dark semi-transparent overlay
      zIndex: '999',                            // Ensure it appears on top
    },
  };
  
  return (
    <div className={styles.card}>
      <img className={styles.card_icon} src={icon} alt={title} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <button onClick={handleOpenModal} className={styles.card_link}>
        Let's Talk
      </button>

      {/* Modal for Calendly */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <button onClick={handleCloseModal} className={styles.closeModalButton}>Close</button>
        
        {/* Calendly Inline Widget */}
        <InlineWidget
          url="https://calendly.com/lazioteamkochi/30min"
          styles={{ width: '100%', height: '500px' }}
        />
      </Modal>
    </div>
  );
};

export default SericeCard;

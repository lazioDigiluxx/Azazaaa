import React from 'react';
import { Users, Phone, MapPin } from 'lucide-react';
import './Contact.module.css';  // Import the updated CSS

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          {/* Any questions or remarks? Just write us a message! */}
        </p>

        <form className="contact-form">
          {/* First Group of Inputs (Email and Name) */}
          <div className="contact-input-group">
          <input
              type="text"
              placeholder="Enter your Name"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="contact-input"
            />
          </div>

          {/* Second Group (Address and Phone) */}
          <div className="contact-input-group">
          <input
              type="phone"
              placeholder="Enter a valid phone number"
              className="contact-input"
            />
            <input
              type="text-area"
              placeholder="Enter your Message"
              className="contact-input"
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            SUBMIT
          </button>
        </form>

        {/* Icon Container */}
        <div className="icon-container">
          <div className="contact-info">
            <div className="info-item">
              <Users className="info-icon" size={28} />
              <h3>ABOUT CLUB</h3>
              <p>Running Guide</p>
              <p>Workouts</p>
            </div>
            <div className="info-item">
              <Phone className="info-icon" size={28} />
              <h3>PHONE</h3>
              <p>+(91) 9544044544</p> 
              <p>+(91) 8089090143</p>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" size={28} />
              <h3>OUR LOCATION</h3>
              <p>Kannoth building, near Darussalam School,
                    Vallathol Junction, Thrikkakara P.O,
                Kochi, Kerala 682021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
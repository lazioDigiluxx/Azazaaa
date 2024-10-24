import React, { useState } from 'react';
import { Users, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newError = { name: '', email: '', phone: '', message: '' };

    // Trimmed inputs for validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
    const trimmedMessage = message.trim();

    // Name validation
    if (!trimmedName || trimmedName !== name || !/^[a-zA-Z\s]+$/.test(trimmedName)) {
      newError.name = 'Invalid Input';
      valid = false;
    }

    // Email validation
    if (!trimmedEmail || trimmedEmail !== email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newError.email = 'Invalid Input';
      valid = false;
    }

    // Phone number validation
    if (!trimmedPhoneNumber || trimmedPhoneNumber !== phoneNumber || !/^[6789]\d{9}$/.test(trimmedPhoneNumber)) {
      newError.phone = 'Invalid Input';
      valid = false;
    }

    // Message validation
    if (trimmedMessage && (trimmedMessage !== message || !/^[a-zA-Z\s]*$/.test(trimmedMessage))) {
      newError.message = 'Invalid Input';
      valid = false;
    }

    // Set error state
    setError(newError);

    // If valid, submit the form
    if (valid) {
      console.log('Form submitted successfully with data:', {
        name: trimmedName,
        email: trimmedEmail,
        phoneNumber: trimmedPhoneNumber,
        message: trimmedMessage
      });
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setError({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className={styles.contactmAIN}>
      <div className={styles.contactbox}>
        <h1 className={styles.contacttitle}>Let's Talk About Your Project</h1>
        <form className={styles.contactform} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Enter your Name"
                className={`${styles.contactinput} ${error.name ? styles.errorInput : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <p className={styles.errorMessage}>{error.name}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className={`${styles.contactinput} ${error.email ? styles.errorInput : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <p className={styles.errorMessage}>{error.email}</p>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                placeholder="Enter a valid phone number"
                className={`${styles.contactinput} ${error.phone ? styles.errorInput : ''}`}
                maxLength="10"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {error.phone && <p className={styles.errorMessage}>{error.phone}</p>}
            </div>
            <div className={styles.inputWrapper}>
              <textarea
                placeholder="Enter your Message (optional)"
                className={`${styles.contactinput} ${error.message ? styles.errorInput : ''}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && <p className={styles.errorMessage}>{error.message}</p>}
            </div>
          </div>

          <button type="submit" className={styles.contactsubmitbtn}>
            SUBMIT
          </button>
        </form>

        <div className={styles.iconcontainer}>
          <div className={styles.contactinfo}>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <Users style={{ color: 'red', fontSize: '28px' }} />
              <div>
              <p style={{color:"white"}}>Azaza Marketing solutions promote your brand with expert Digital marketing, Web development, and Branding</p>
              </div>
            </div>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <Phone style={{ color: 'red', fontSize: '28px' }} />
              <div>
              <p style={{color:"white"}}>&nbsp;&nbsp;+(91)7736558999 </p>
              </div>
            </div>
            <div className={`${styles.infoitem} ${styles.flexRow}`}>
              <MapPin style={{ color: 'red', fontSize: '28px' }} />
              <div>
                <p style={{color:"white"}}>
                  Kannoth building, near Darussalam School, Vallathol Junction, Thrikkakara P.O, Kochi, Kerala 682021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
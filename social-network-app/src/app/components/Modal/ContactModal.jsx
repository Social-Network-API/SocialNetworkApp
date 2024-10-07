import React from 'react';
import '../../assets/styles/contactModal.css';
import profilePic from '../../assets/images/perfil.jpg';

const ContactModal = ({ userName, userProfilePic }) => {
  return (
    <div className="contact-modal-container">
      <h3 className="contact-title">Following</h3>
      <div className="contact-info">
        <img src={userProfilePic || profilePic} alt="User Profile" className="contact-profile-pic" />
        <div className="contact-user-info">
          <h4>{userName}</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

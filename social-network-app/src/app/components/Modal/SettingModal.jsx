import React from 'react';
import { FaEdit, FaSignOutAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; 
import { useNavigate } from "react-router-dom";
import './../../assets/styles/settingModal.css';

const SettingModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;
  
    const handleEditProfile = () => {
      navigate('/EditProfile'); 
      onClose();
    };

  return (
    <div className="modal-content">
      <IoClose className="close-icon" onClick={onClose} />
      <h2>Settings</h2>
      <div className="modal-option" onClick={handleEditProfile}>
        <FaEdit className="modal-icon" />
        <span>Edit Profile</span>
      </div>
      <div className="modal-option" onClick={() => alert("Logout clicked!")}>
        <FaSignOutAlt className="modal-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SettingModal;

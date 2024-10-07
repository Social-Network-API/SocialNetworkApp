import React from 'react';
import { FaEdit, FaSignOutAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import './../../assets/styles/settingModal.css';

const SettingModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleEditProfile = () => {
        navigate('/EditProfile');
        onClose();
    };

    const handleLogout = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert("You are not logged in"); 
            return;
        }

        try {
            await axios.post('http://localhost:5270/api/v1/auth/logout', token, {
                headers: {
                    'Content-Type': 'application/json', 
                },
                data: token 
            });
            localStorage.removeItem('token'); 
            navigate('/'); 
            onClose(); 
        } catch (error) {
            console.error('Error logging out:', error.response.data.message);
            alert("Error logging out");
        }
    };


    return (
        <div className="modal-content">
            <IoClose className="close-icon" onClick={onClose} />
            <h2>Settings</h2>
            <div className="modal-option" onClick={handleEditProfile}>
                <FaEdit className="modal-icon" />
                <span>Edit Profile</span>
            </div>
            <div className="modal-option" onClick={handleLogout}>
                <FaSignOutAlt className="modal-icon" />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default SettingModal;

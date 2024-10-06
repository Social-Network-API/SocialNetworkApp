import React from 'react';
import { FaUserFriends, FaHeart, FaRegNewspaper } from 'react-icons/fa';
import profilePic from '../../assets/images/perfil.jpg'; 
import useWindowSize from '../../hooks/useWindowsSize'; 
import '../../assets/styles/menuOption.css';

const MenuOption = () => {
  const { width, height } = useWindowSize(); 

  return (
    <div
      className="menu-option-container"
      style={{
        width: width *0.2, 
        height: height,      
      }}
    >
      <div className="profile-section">
        <img src={profilePic} alt="User Profile" className="profile-pic" />
        <h2 className="profile-name">User Name</h2>
      </div>
      <div className="menu-section">
        <h3>Explore Panel</h3>
        <ul className="menu-options-list">
          <li>
            <FaUserFriends className="menu-icon" />
            <span>Friends</span>
          </li>
          <li>
            <FaHeart className="menu-icon" />
            <span>Liked Post</span>
          </li>
          <li>
            <FaRegNewspaper className="menu-icon" />
            <span>My Post</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuOption;

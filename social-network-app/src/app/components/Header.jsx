import React, { useState, useEffect } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/logo.png";
import profilePic from "../assets/images/perfil.jpg"; // Imagen predeterminada
import SettingModal from "./Modal/SettingModal";
import "../assets/styles/header.css";
import axios from "axios"; // Asegúrate de importar axios

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(profilePic); // Estado para la imagen del perfil
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Obtener el ID del usuario

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5270/api/v1/users/${userId}`);
        setUserProfile(response.data.profilePicture || profilePic); // Asignar la imagen del perfil o la predeterminada
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, []);

  const handleSearchClick = () => {
    alert("Buscando...");
  };

  const handleSettingsClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    alert("Ver perfil...");
  };

  const handleLogoClick = () => {
    navigate("/Home");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo" onClick={handleLogoClick}>
          <img src={image} alt="Logo" className="logo" />
        </div>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search for friends here..."
            className="search-input"
          />
          <AiOutlineSearch
            className="search-icon"
            onClick={handleSearchClick}
          />
        </div>

        <div className="header__right">
          <HiOutlineCog6Tooth className="icon-setting" onClick={handleSettingsClick} />
          <div className="header__profile" onClick={handleProfileClick}>
            <img src={userProfile} alt="User Profile" className="profile-img" />
          </div>
        </div>
      </header>

      <SettingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;

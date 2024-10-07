import React, { useState } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/logo.png";
import profile from "../assets/images/perfil.jpg";
import SettingModal from "./Modal/SettingModal";
import "../assets/styles/header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
            <img src={profile} alt="User Profile" className="profile-img" />
          </div>
        </div>
      </header>

      <SettingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;

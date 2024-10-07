import React from "react";
import { FaUserFriends, FaHeart, FaRegNewspaper } from "react-icons/fa";
import profilePic from "../../assets/images/perfil.jpg";
import useWindowSize from "../../hooks/useWindowsSize";
import { useNavigate, useLocation } from "react-router-dom"; 
import "../../assets/styles/menuOption.css";

const MenuOption = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLikedPostClick = () => {
    navigate("/LikedPost");
  };

  const handleMyPostClick = () => {
    navigate("/MyPost");
  };

  const handleFollowersClick = () => {
    navigate("/Followers");
  };
  const isLikedPostsActive = location.pathname === "/LikedPost";
  const isMyPostsActive = location.pathname === "/MyPost";
  const isFollowersActive = location.pathname === "/Followers";


  return (
      <div className="menu-option-container" style={{ width: "200px" }}>
        <div className="profile-section">
          <img src={profilePic} alt="User Profile" className="profile-pic" />
          <h2 className="profile-name">User Name</h2>
        </div>
        <div className="menu-section">
          <h3>Explore Panel</h3>
          <ul className="menu-options-list">
            <li onClick={handleFollowersClick}
                className={isFollowersActive ? "active" : ""}>
              <FaUserFriends className="menu-icon iconFriends" />
              <span>Followers</span>
            </li>
            <li
                onClick={handleLikedPostClick}
                className={isLikedPostsActive ? "active" : ""}>
              <FaHeart className="menu-icon iconLiked" />
              <span>Liked Post</span>
            </li>
            <li  onClick={handleMyPostClick}
                 className={isMyPostsActive ? "active" : ""}>
              <FaRegNewspaper className="menu-icon iconPosts" />
              <span>My Post</span>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default MenuOption;


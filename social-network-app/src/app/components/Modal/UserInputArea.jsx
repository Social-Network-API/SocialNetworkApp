import React from "react";
import profilePic from "../../assets/images/perfil.jpg";
import "../../assets/styles/userInputArea.css";

const UserInputArea = ({ value, onChange, placeholder }) => {
  return (
    <div className="write-post-header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <textarea
        className="post-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UserInputArea;

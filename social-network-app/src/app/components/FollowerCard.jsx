import React from "react";
import profilePic from "../assets/images/perfil.jpg";
import "../assets/styles/followCard.css";

const FollowerCard = ({ user }) => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <div className="user-info">
                    <h4>{user.name}</h4>
                </div>
                <button className="add-friend-btn">unfollow</button>
            </div>
        </div>
    );
};

export default FollowerCard;

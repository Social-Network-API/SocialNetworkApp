import React from "react";
import Header from "../components/Header";
import profilePic from "../assets/images/postImage.png";
import profileDefault from "../assets/images/perfil.jpg";
import "../assets/styles/home.css";
import FollowerCard from "../components/FollowerCard";
import MenuOption from "../components/Modal/MenuOption";

const Followers = () => {
    const user = {
        profilePic: profilePic,
        name: "John Doe",
        timestamp: "2 hours ago",
    };

    const comments = [
        {
            userProfilePic: profileDefault,
            userName: "Alice",
            text: "Great post!",
        },
        {
            userProfilePic: profileDefault,
            userName: "Bob",
            text: "Thanks for sharing!",
        },
    ];

    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <div className="left-sidebar">
                    <MenuOption />
                </div>

                <div className="main-content">
                    <FollowerCard
                        user={user}
                    />
                    <FollowerCard
                        user={user}
                    />
                    <FollowerCard
                        user={user}
                    />
                </div>

            </div>
        </div>
    );
};

export default Followers;

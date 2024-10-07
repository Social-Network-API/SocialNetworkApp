import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/Modal/MenuOption";
import WritePost from "../components/WritePost";
import Post from "../components/Post";
import profilePic from "../assets/images/postImage.png";
import profileDefault from "../assets/images/perfil.jpg";
import ContactModal from "../components/Modal/ContactModal";
import "../assets/styles/home.css";

const Home = () => {
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
          <WritePost />
          <Post
            user={user}
            content="This is a sample post content."
            image={profilePic}
            likes={12}
            comments={comments}
          />
        </div>

        <div className="right-sidebar">
          <ContactModal
            userName="John Doe"
            userProfilePic={profileDefault}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

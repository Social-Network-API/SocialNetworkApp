import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import MenuOption from "../components/Modal/MenuOption";
import WritePost from "../components/WritePost";
import Post from "../components/Post";
import ContactModal from "../components/Modal/ContactModal";
import "../assets/styles/home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        const response = await axios.get(`http://localhost:5270/api/v1/posts/home?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
      <div className="home-container">
        <Header />
        <div className="home-content">
          <div className="left-sidebar">
            <MenuOption />
          </div>

          <div className="main-content">
            <WritePost />
            {posts.map((post) => (
                <Post
                    user={post.user}
                    content={post.content}
                    image={post.image}
                    likes={post.likes.total}
                    comments={post.comments.list}
                />
            ))}
          </div>

          <div className="right-sidebar">
            <ContactModal userName="John Doe" userProfilePic="../assets/images/perfil.jpg" />
          </div>
        </div>
      </div>
  );
};

export default Home;

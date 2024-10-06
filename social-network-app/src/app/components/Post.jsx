import React, { useState } from "react";
import { FaEllipsisH, FaThumbsUp } from "react-icons/fa";
import Comments from "./Modal/Comments";
import profilePic from "../assets/images/perfil.jpg";
import "../assets/styles/post.css";

const Post = ({ user, content, image, likes, comments }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments); 
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="user-info">
          <h4>{user.name}</h4>
          <span>{user.timestamp}</span>
        </div>
        <FaEllipsisH className="options-icon" />
      </div>

      <p className="post-content">{content}</p>
      {image && <img src={image} alt="Post" className="post-image" />}

      <hr className="divider" />

      <div className="post-footer">
        {likeCount > 0 && (
          <span className="likes-count">{likeCount} Likes</span>
        )}
        {comments.length > 0 && (
          <span className="comments-count">{comments.length} Comments</span>
        )}
      </div>

      <hr className="divider" />

      <div className="post-actions">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          <FaThumbsUp className="like-icon" />
          {liked ? "Liked" : "Like"}
        </button>
        <button className="comment-button" onClick={toggleComments}>Comment</button>
      </div>

      {showComments && <Comments comments={comments} />}
    </div>
  );
};

export default Post;

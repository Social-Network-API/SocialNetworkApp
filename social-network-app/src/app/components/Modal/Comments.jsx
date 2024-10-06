import React, { useState } from "react";
import UserInputArea from "../../components/Modal/UserInputArea";
import profilePic from "../../assets/images/postImage.png";
import { IoMdSend } from "react-icons/io";
import "../../assets/styles/comments.css";

const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    console.log("New comment:", newComment);
    setNewComment("");
  };

  return (
    <div className="comments-container">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="comment-info">
            <h5>{comment.userName}</h5>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}

      <div className="add-comment">
        <div style={{ flex: 1 }}>
          <UserInputArea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
          />
        </div>
        <div className="send-icon-container">
          <IoMdSend className="icon send-icon" onClick={handleCommentSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Comments;

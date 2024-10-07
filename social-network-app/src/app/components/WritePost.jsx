import React, { useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import UserInputArea from "../components/Modal/UserInputArea";
import "../assets/styles/writePost.css";

const WritePost = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handlePostSubmit = () => {
    console.log("Post:", postContent, "Image:", selectedImage);
    setPostContent("");
    setSelectedImage(null);
  };

  return (
    <div className="write-post-container">
      <UserInputArea
        value={postContent}
        onChange={handlePostChange}
        placeholder="Write a post..."
      />
      {selectedImage && (
        <div className="post-image-preview">
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      <div className="write-post-footer">
        <label className="image-upload">
          <AiFillPicture className="icon" />
          <span>Add Photo</span>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <IoMdSend className="icon send-icon" onClick={handlePostSubmit} />
      </div>
    </div>
  );
};

export default WritePost;

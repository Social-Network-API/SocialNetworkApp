import React, { useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import UserInputArea from "../components/Modal/UserInputArea";
import "../assets/styles/writePost.css";
import axios from "axios";


const WritePost = ({ onPostCreated }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Guardar el archivo directamente
    }
  };
  const handlePostSubmit = async () => {
    const userId = localStorage.getItem("userId"); // Asegúrate de obtener el ID del usuario

    const formData = new FormData();
    formData.append("Content", postContent);
    if (selectedImage) {
        formData.append("ImageUrl", selectedImage); // Solo agregar si hay una imagen
    }
    formData.append("UserId", userId);

    try {
        const response = await axios.post("http://localhost:5270/api/v1/posts", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Asegúrate de enviar el tipo correcto
            },
        });

        console.log("Post creado:", response.data);
        setPostContent("");
        setSelectedImage(null);
        onPostCreated(); // Llama a la función para actualizar la UI si es necesario
    } catch (error) {
        console.error("Error creando el post:", error);
    }
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
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
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

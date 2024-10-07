import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import FieldText from "../components/FieldText";
import BigPrimaryButton from "../components/BigPrimaryButton";
import profileDefault from "../assets/images/perfil.jpg";
import { FaRegEdit } from "react-icons/fa";
import Header from "../components/Header";
import axios from "axios"; // Asegúrate de importar axios
import { useNavigate } from "react-router-dom";
import "../assets/styles/editProfile.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(profileDefault);
  const userId = localStorage.getItem("userId"); // Obtén el ID del usuario
  const navigator = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5270/api/v1/users/${userId}`);
        setName(response.data.name);
        setProfilePhoto(response.data.profilePicture || profileDefault);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSave = async () => {
    const updatedData = {
      name,
      profilePicture: profilePhoto,
    };

    try {
      await axios.put(`http://localhost:5270/api/v1/users/${userId}`, updatedData);
      
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    navigator("/Home"); 
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      (file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/svg+xml")
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <div className="profile-content-container">
        <div className="edit-profile-container">
          <h2>Edit Profile</h2>
          <div className="profile-photo">
            <label htmlFor="upload-photo">
              <div className="photo-circle">
                <img src={profilePhoto} alt="Profile" className="profile-img" />
                <div className="overlay">
                  <FaRegEdit className="overlay-icon" size={30} />
                </div>
              </div>
            </label>
            <input
              type="file"
              id="upload-photo"
              accept="image/png, image/jpeg, image/svg+xml"
              style={{ display: "none" }}
              onChange={handleProfilePhotoChange}
            />
          </div>

          <Box className="field-container">
            <FieldText
              variant="outlined"
              value={name}
              setValue={setName}
              name="name"
              label="Name"
              placeholder="Enter your name"
              required={true}
            />
          </Box>
          <div className="button-container">
            <BigPrimaryButton onClick={handleSave} children="Save Changes" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

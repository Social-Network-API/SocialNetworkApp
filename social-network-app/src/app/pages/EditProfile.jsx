import React, { useState } from "react";
import { Box } from "@mui/system";
import FieldText from "../components/FieldText";
import PasswordField from "../components/PasswordField";
import BigPrimaryButton from "../components/BigPrimaryButton";
import profileDefault from "../assets/images/perfil.jpg";
import { FaRegEdit } from "react-icons/fa";
import Header from "../components/Header";
import "../assets/styles/editProfile.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(profileDefault);

  const handleSave = () => {
    console.log("Profile updated:", { name, email, password, newPassword });
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
              label="Nombre"
              placeholder="Ingresa tu nombre"
              required={true}
            />
          </Box>
          <Box className="field-container">
            <FieldText
              variant="outlined"
              value={email}
              setValue={setEmail}
              name="email"
              label="Email"
              placeholder="nombre@ejemplo.com"
              required={true}
            />
          </Box>
          <Box className="field-container">
            <PasswordField
              variant="outlined"
              value={password}
              setValue={setPassword}
              name="password"
              label="Contraseña"
              placeholder=""
              required={true}
            />
          </Box>
          <Box className="field-container">
            <PasswordField
              variant="outlined"
              value={newPassword}
              setValue={setNewPassword}
              name="newPassword"
              label="Nueva Contraseña"
              placeholder=""
              required={true}
            />
          </Box>
          <div className="button-container">
            <BigPrimaryButton onClick={handleSave} children="Guardar Cambios" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

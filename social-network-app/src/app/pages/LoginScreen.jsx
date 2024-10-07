import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldText from "../components/FieldText";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import image from "../assets/images/logo.png";
import "../assets/styles/LoginScreen.css";
import { Box } from "@mui/system";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5270/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      const { token, userId } = response.data; // Asegúrate de que el ID del usuario esté en la respuesta
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId); // Almacena el ID del usuario
  

      navigate("/Home");
    } catch (error) {
      console.error("Error logging in:", error.response.data.message);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/Signup");
  };

  return (
    <div className="login-screen">
      <div className="login-wrapper">
        <div className="branding">
          <img src={image} alt="Logo" className="logo" />
          <p>Connect with friends and the world around you on Mingle.</p>
        </div>

        <div className="login-container">
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <Box className="field-container">
                <FieldText
                  variant="outlined"
                  value={email}
                  setValue={setEmail}
                  name="email"
                  label="Email"
                  placeholder="name@example.com"
                  required={true}
                />
              </Box>
              <Box className="field-container">
                <PasswordField
                  variant="outlined"
                  value={password}
                  setValue={setPassword}
                  name="password"
                  label="Password"
                  placeholder=""
                  required={true}
                />
              </Box>
            </form>
            <Button
              onClick={handleLogin}
              type="submit"
              label="Login"
              color="primary"
              className="btn login-btn"
            />
            <Button
              onClick={handleSignupRedirect}
              label="Create new account"
              color="success"
              className="btn create-account-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

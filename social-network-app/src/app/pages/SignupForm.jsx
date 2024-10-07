import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldText from "../components/FieldText";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import "../assets/styles/SignupForm.css";
import { Box } from "@mui/system";
import image from "../assets/images/logo.png";
import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5270/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      console.error("Error registering:", error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <img src={image} alt="Logo" />
      </div>
      <div className="right-side">
        <div className="form-container">
          <h1>Account Registration</h1>
          <p>Join us and enjoy exclusive promotions.</p>
          <form onSubmit={handleSubmit}>
            <Box className="field-container">
              <FieldText
                variant="outlined"
                value={name}
                setValue={setName}
                name="name"
                label="Username"
                placeholder="Enter your username"
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
            <Button
              onClick={handleSubmit}
              type="submit"
              label="Continue"
              className="login-btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditProfile from "../src/app/pages/EditProfile";
import LoginScreen from "../src/app/pages/LoginScreen";
import SignupForm from "../src/app/pages/SignupForm";
import Home from "../src/app/pages/Home";
import LikedPost from "../src/app/pages/LikedPost";
import MyPost from "../src/app/pages/MyPost";
import Followers from "./app/pages/Followers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/LikedPost" element={<LikedPost />} />
        <Route path="/MyPost" element={<MyPost />} />
        <Route path="/Followers" element={<Followers />} />
      </Routes>
    </Router>
  );
}

export default App;

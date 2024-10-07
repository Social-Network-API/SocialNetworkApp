import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProfile from '../src/app/pages/EditProfile';
import LoginScreen from '../src/app/pages/LoginScreen';
import SignupForm from '../src/app/pages/SignupForm';
import Home from "../src/app/pages/Home";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen />} /> 
                <Route path="/Signup" element={<SignupForm />} />
                <Route path="/Home" element={<Home />} /> 
                <Route path="/EditProfile" element={<EditProfile />} /> 
            </Routes>
        </Router>
    );
}

export default App;

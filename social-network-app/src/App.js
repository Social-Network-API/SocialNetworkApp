import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/app/pages/Home';
import EditProfile from '../src/app/pages/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

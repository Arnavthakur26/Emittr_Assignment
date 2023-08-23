// import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComplexNavbar } from "./components/Navabar";
import LanguageSelection from "./pages/LanguageSelection";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/selectlanguage" element={<LanguageSelection />} />
        <Route path="/quiz/:langId" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

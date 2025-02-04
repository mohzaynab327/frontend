// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Header from './components/Header';
import Courses from './Pages/Courses';
import Profile from './Pages/Profile'; 
// import Sidebar from './components/Sidebar';
import StuRegister from './Pages/StuRegister'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Footer" element={<Profile />} />
        <Route path="/StuRegister" element={<StuRegister />} />
  
      </Routes>
    </Router>
  );
};

export default App;

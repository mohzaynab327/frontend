// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

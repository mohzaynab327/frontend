import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../css/Header.css';
import '../css/Sidebar.css';
import '../css/MainContent.css';
import '../css/Footer.css';
import '../css/Profile.css'; // Importing the profile CSS

const Profile = () => {
  // Sample user data for profile
  const userData = {
    name: 'Zainab Mohamed',
    email: 'mohzaynab327@gmail.com',
    bio: 'student',
    role: 'Student',
  };

  const [user, setUser] = useState(userData);
  const [isEditing, setIsEditing] = useState(false); // Track if we are editing the profile

  // Handle input change during profile editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Toggle editing mode
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  // Save edited profile (you can connect this to an API or backend logic)
  const saveProfile = () => {
    // Logic to save profile (e.g., API call)
    alert('Profile saved!');
    toggleEditMode(); // Turn off editing mode after saving
  };

  return (
    <div className="home-container">
      <Header />
      <div className="main-container">
        <Sidebar />

        <div className="main-content">
          {/* Profile Section */}
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                    <select
                      name="role"
                      value={user.role}
                      onChange={handleInputChange}
                    >
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </>
                ) : (
                  <>
                    <h2>{user.name}</h2>
                    <p>{user.role}</p>
                    <p className="profile-email">{user.email}</p>
                  </>
                )}
              </div>
            </div>

            <div className="profile-bio">
              <h3>Bio</h3>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                />
              ) : (
                <p>{user.bio}</p>
              )}
            </div>

            <button
              className="edit-profile-btn"
              onClick={isEditing ? saveProfile : toggleEditMode}
            >
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
// import axios from 'axios';
import "../css/login.css";  // Import the CSS file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // To toggle between login and register forms

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Handle registration logic here
      console.log("Registering with:", { username, password });
    } else {
      // Handle login logic here
      onLogin({ username, password });
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering); // Toggle between login and register
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>

        {/* Toggle between login and register */}
        <div className="toggle">
          <p>
            {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
            <span onClick={toggleForm}>
              {isRegistering ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

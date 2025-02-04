import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistrationForm = () => {
  // State variables to manage form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks for empty fields
    if (!name || !age || !phone || !address) {
      setMessage('Please fill out all fields');
      return;
    }

    setLoading(true);
    const studentData = {
      name,
      age,
      phone,
      address
    };

    // Send POST request to Django API
    axios.post('http://127.0.0.1:8000/students/', studentData)
      .then((response) => {
        setLoading(false);
        setMessage('Student registered successfully!');
        // Reset form
        setName('');
        setAge('');
        setPhone('');
        setAddress('');
      })
      .catch((error) => {
        setLoading(false);
        setMessage('Registration failed. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className="student-registration-form">
      <h2>Student Registration</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentRegistrationForm;
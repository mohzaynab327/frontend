// src/services/api.js
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:8000/api/';  // Update with your Django backend URL

// Fetch list of students
export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}students/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Fetch list of courses
export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}courses/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

// Fetch list of registrations
export const getRegistrations = async () => {
  try {
    const response = await axios.get(`${API_URL}registrations/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching registrations:', error);
    throw error;
  }
};

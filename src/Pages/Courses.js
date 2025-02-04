import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../css/Header.css';
import '../css/Sidebar.css';
import '../css/MainContent.css';
import '../css/Footer.css';
import '../css/Profile.css'; // Importing the profile CSS

const Home = () => {
  const [courses, setCourses] = useState([]); // State to hold the fetched courses
  const [enrolledCourses, setEnrolledCourses] = useState([]); // State to manage enrolled courses
  const [isProfileView, setIsProfileView] = useState(false); // Track if we're viewing profile or courses

  // Fetch courses from the backend API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:8000/course/')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  // Enroll in a course
  const enrollInCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="main-container">
        <Sidebar />

        <div className="main-content">
          {/* Toggle between profile view and courses */}
         

          {!isProfileView && (
            <div>
              <h2>Available Courses</h2>
              {/* Available Courses Table */}
              <table className="course-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Max Students</th>
                    <th>Course Code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.name}</td>
                      <td>{course.description}</td>
                      <td>{course.max_student}</td>
                      <td>{course.course_code}</td>
                      <td>
                        <button
                          onClick={() => enrollInCourse(course)}
                          disabled={enrolledCourses.includes(course)}
                        >
                          {enrolledCourses.includes(course) ? 'Enrolled' : 'Enroll'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3>Your Enrolled Courses</h3>
              {/* Enrolled Courses Table */}
              <table className="enrolled-course-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Max Students</th>
                    <th>Course Code</th>
                  </tr>
                </thead>
                <tbody>
                  {enrolledCourses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.description}</td>
                      <td>{course.max_student}</td>
                      <td>{course.course_code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

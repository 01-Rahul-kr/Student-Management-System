import "./LandingPage.css";
import React from "react";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Student Management System</h1>
        <p>
          Manage student records easily with a clean and modern dashboard.
        </p>

        <button className="enter-btn" onClick={onEnter}>
          Enter Dashboard →
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
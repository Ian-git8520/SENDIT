import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"; 

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="animated-bg"></div>

      <div className="landing-content">
        <h1 className="animated-text">Welcome to SendIT </h1>
        <p className="animated-text delay1">
          Fast, reliable, and simple courier service at your fingertips.
        </p>

        <div className="landing-buttons">
          <Link to="/signup" className="btn float-hover">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-outline float-hover">
            Login
          </Link>
        </div>
      </div>

      {/* Floating decorative shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>
    </div>
  );
};

export default Landing;


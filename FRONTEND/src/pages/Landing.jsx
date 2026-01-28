import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const features = [
  {
    title: "Easy Order Creation",
    description: "Create parcel delivery orders in seconds with our intuitive interface."
  },
  {
    title: "Real-Time Tracking",
    description: "Track your parcels on an interactive Google Map with live updates."
  },
  {
    title: "Instant Quotes",
    description: "Get accurate delivery quotes based on weight categories and distance."
  },
  {
    title: "Secure Deliveries",
    description: "Your parcels are insured and handled with care from pickup to delivery."
  },
  {
    title: "Flexible Payments",
    description: "Pay securely with credit cards, mobile money, or cash on delivery."
  },
  {
    title: "Smart Notifications",
    description: "Receive real-time email notifications when your parcel status changes."
  },
  {
    title: "Mobile Friendly",
    description: "Access SendIT from any device with our responsive design."
  },
  {
    title: "Wide Coverage",
    description: "Delivering to 150+ cities. From local to cross-country shipping."
  }
];

const Landing = () => {
  return (
    <div className="landing-new">
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">SendIT</h1>
        <p className="hero-subtitle">
          Fast, reliable, and secure courier delivery at your fingertips.
        </p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-signup">Signup</Link>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-cards">
        <div className="stat-card">
          <h2>1,245</h2>
          <p>Deliveries Made</p>
        </div>
        <div className="stat-card">
          <h2>98%</h2>
          <p>On-time Rate</p>
        </div>
        <div className="stat-card">
          <h2>25</h2>
          <p>Cities Covered</p>
        </div>
        <div className="stat-card">
          <h2>4.9/5</h2>
          <p>User Rating</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h2>Features</h2>
          <p className="features-subtitle">
            Everything You Need for <br />
            Seamless Delivery
          </p>
          <p className="features-description">
            Powerful features designed to make parcel delivery effortless.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;











const Landing = () => {
    return (
        <div className="landing-container">
            <div className="animated-bg"></div>

            <div className="landing-content">
                <h1 className="animated-text">Welcome to SendIT 🚀</h1>
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

           
            <div className="floating-shape shape1"></div>
            <div className="floating-shape shape2"></div>
            <div className="floating-shape shape3"></div>
        </div>
    );
};

export default Landing;


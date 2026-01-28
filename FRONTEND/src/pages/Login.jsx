import React from "react";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      {/* Animated background shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      {/* Login form */}
      <div className="login-content">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to continue your journey!</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-container">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>

              
                <div className="signup-content">
                    <h1 className="signup-title">Create Your Account</h1>
                    <p className="signup-subtitle">Join us and start your journey today!</p>
                    <form className="signup-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className="btn-signup">
                            Sign Up
                        </button>
                    </form>
                    <p className="login-link">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                                          
                </div>
            </div>

        </div>
    );
};

export default Signup;

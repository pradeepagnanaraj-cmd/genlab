import React, { useState } from "react";
import "./signup.css";

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Backend will be connected later
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        {/* Left Image */}
        <div className="signup-image">
          <img
            src="/src/assets/auth-image.png"
            alt="Sign Up"
          />
        </div>

        {/* Right Signup Form */}
        <div className="signup-form">

          <h1>Create Account</h1>

          <p className="signup-subtitle">
            Sign up to get started
          </p>

          <form onSubmit={handleSignup}>

            {/* Full Name */}
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Email */}
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm Password */}
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Sign Up Button */}
            <button
              type="submit"
              className="signup-button"
            >
              Sign Up
            </button>

          </form>

          {/* Login */}
          <p className="login-text">
            Already have an account?

            <button
              type="button"
              className="login-link"
              onClick={onLogin}
            >
              Login
            </button>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Signup;
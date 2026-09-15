import React, { useState } from "react";
import "./login.css";

function Login({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Backend will be connected later
  };

  const handleGoogleLogin = () => {
    // Google login will be connected later
    console.log("Continue with Google clicked");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Image Section */}
        <div className="login-image">
          <img
            src="/src/assets/auth-image.png"
            alt="Login"
          />
        </div>

        {/* Right Login Section */}
        <div className="login-form">

          <h1>Welcome Back!</h1>

          <p className="login-subtitle">
            Login to continue
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          {/* OR Divider */}
          <div className="or-divider">
            <span>OR</span>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
          >
            <span className="google-icon">G</span>
            <span>Continue with Google</span>
          </button>

          {/* Sign Up */}
          <p className="signup-text">
            Don't have an account?

            <button
              type="button"
              className="signup-link"
              onClick={onSignup}
            >
              Sign Up
            </button>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;
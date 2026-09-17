import React, { useState } from "react";
import "./signup.css";

function Signup({ onLogin }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Account created successfully!");
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                if (onLogin) {
                    onLogin();
                }
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend server");
        }
    };

    return (
        <div className="signup-page-bg">
            <div className="auth-split-card">
                {/* LEFT SIDE IMAGE */}
                <div className="auth-left-image-box">
                    <img
                        src="/src/assets/auth-image.png"
                        alt="School Supplies Exchange"
                        className="auth-side-image"
                    />
                    <div className="image-overlay-text">
                        <span>Good Supplies Brighter Futures ♡</span>
                    </div>
                </div>

                {/* RIGHT SIDE SIGNUP FORM */}
                <div className="auth-right-form-box">
                    <div className="auth-card-top-icon">
                        📚
                    </div>

                    <h1 className="auth-card-title">Create Account</h1>
                    <p className="auth-card-subtitle">
                        Sign up to start exchanging school supplies
                    </p>

                    <form onSubmit={handleSignup} className="auth-form-body">
                        <div className="auth-input-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="auth-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="auth-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="auth-input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="auth-primary-btn">
                            Sign Up
                        </button>
                    </form>

                    <p className="auth-footer-text">
                        Already have an account?{" "}
                        <button
                            type="button"
                            className="auth-link-btn"
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
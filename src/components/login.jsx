import React, { useState } from "react";
import "./login.css";

function Login({ onSignup, onLoginSuccess }) {
    const [contact, setContact] = useState("");
    const [otp, setOtp] = useState("");
    const [showOTP, setShowOTP] = useState(false);

    // ================= GET OTP =================
    const handleGetOTP = async (e) => {
        e.preventDefault();

        if (!contact) {
            alert("Please enter your email or mobile number");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contact: contact
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("OTP sent successfully to your Gmail!");
                setShowOTP(true);
            } else {
                alert(data.message || "Failed to send OTP");
            }
        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend. Make sure the server is running.");
        }
    };

    // ================= VERIFY OTP =================
    const handleVerifyOTP = async (e) => {
        e.preventDefault();

        if (!otp) {
            alert("Please enter the OTP");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contact: contact,
                    otp: otp
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");

                // Save JWT token
                localStorage.setItem("token", data.token);

                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                console.log("Logged in user:", data.user);

                // Go to Home page
                if (onLoginSuccess) {
                    onLoginSuccess(data.user);
                }
            } else {
                alert(data.message || "Invalid OTP");
            }
        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend. Make sure the server is running.");
        }
    };

    // ================= GOOGLE LOGIN =================
    const handleGoogleLogin = () => {
        alert("Google login will be connected later.");
    };

    return (
        <div className="login-page-bg">
            {/* CENTERED FLOATING SPLIT CONTAINER */}
            <div className="auth-split-card">
                {/* LEFT SIDE: SCHOOL SUPPLIES IMAGE */}
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

                {/* RIGHT SIDE: LOGIN FORM */}
                <div className="auth-right-form-box">
                    <div className="auth-card-top-icon">
                        📚
                    </div>

                    <h1 className="auth-card-title">Welcome Back!</h1>
                    <p className="auth-card-subtitle">
                        Login to continue exchanging school supplies
                    </p>

                    {/* GET OTP FORM */}
                    <form onSubmit={handleGetOTP} className="auth-form-body">
                        <div className="auth-input-group">
                            <label htmlFor="contact">
                                Email or Mobile Number
                            </label>
                            <input
                                id="contact"
                                type="text"
                                placeholder="Enter your email or mobile number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>

                        {!showOTP && (
                            <button type="submit" className="auth-primary-btn">
                                Get OTP
                            </button>
                        )}
                    </form>

                    {/* VERIFY OTP FORM */}
                    {showOTP && (
                        <form onSubmit={handleVerifyOTP} className="auth-form-body otp-top-space">
                            <div className="auth-input-group">
                                <label htmlFor="otp">
                                    Enter OTP
                                </label>
                                <input
                                    id="otp"
                                    type="text"
                                    maxLength="6"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="auth-primary-btn">
                                Verify OTP
                            </button>
                        </form>
                    )}

                    {/* OR DIVIDER */}
                    <div className="auth-divider">
                        <span className="divider-line"></span>
                        <span className="divider-text">OR</span>
                        <span className="divider-line"></span>
                    </div>

                    {/* GOOGLE BUTTON */}
                    <button
                        type="button"
                        className="auth-google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span>Continue with Google</span>
                    </button>

                    {/* SIGN UP REDIRECT LINK */}
                    <p className="auth-footer-text">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            className="auth-link-btn"
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
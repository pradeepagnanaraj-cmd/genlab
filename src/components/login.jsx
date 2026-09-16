import React, { useState } from "react";
import "./login.css";

function Login({ onSignup }) {

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

            const response = await fetch(
                "http://localhost:5000/api/send-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        contact: contact
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert(
                    "OTP generated successfully! Check the backend terminal."
                );

                setShowOTP(true);

            } else {

                alert(data.message);
            }

        } catch (error) {

            console.error(error);

            alert(
                "Cannot connect to backend. Make sure the server is running."
            );
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

            const response = await fetch(
                "http://localhost:5000/api/verify-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        contact: contact,
                        otp: otp
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert("Login successful!");

                // Save JWT token
                localStorage.setItem(
                    "token",
                    data.token
                );

                console.log("Logged in user:", data.user);

            } else {

                alert(data.message);
            }

        } catch (error) {

            console.error(error);

            alert(
                "Cannot connect to backend. Make sure the server is running."
            );
        }
    };


    // ================= GOOGLE LOGIN =================

    const handleGoogleLogin = () => {

        alert("Google login will be connected later.");
    };


    return (

        <div className="login-page">

            <div className="login-container">


                {/* IMAGE */}

                <div className="login-image">

                    <img
                        src="/src/assets/auth-image.png"
                        alt="Login"
                    />

                </div>


                {/* LOGIN FORM */}

                <div className="login-form">

                    <h1>Welcome Back!</h1>

                    <p className="login-subtitle">
                        Login using your email or mobile number
                    </p>


                    {/* CONTACT FORM */}

                    <form onSubmit={handleGetOTP}>

                        <label htmlFor="contact">
                            Email or Mobile Number
                        </label>

                        <input
                            id="contact"
                            type="text"
                            placeholder="Enter email or mobile number"
                            value={contact}
                            onChange={(e) =>
                                setContact(e.target.value)
                            }
                            required
                        />


                        <button
                            type="submit"
                            className="login-button"
                        >
                            Get OTP
                        </button>

                    </form>


                    {/* OTP SECTION */}

                    {showOTP && (

                        <div className="otp-section">

                            <label htmlFor="otp">
                                Enter OTP
                            </label>

                            <input
                                id="otp"
                                type="text"
                                maxLength="6"
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                onChange={(e) =>
                                    setOtp(e.target.value)
                                }
                            />


                            <button
                                type="button"
                                className="login-button"
                                onClick={handleVerifyOTP}
                            >
                                Verify OTP
                            </button>

                        </div>

                    )}


                    {/* OR */}

                    <div className="or-divider">
                        <span>OR</span>
                    </div>


                    {/* GOOGLE */}

                    <button
                        type="button"
                        className="google-button"
                        onClick={handleGoogleLogin}
                    >

                        <span className="google-icon">
                            G
                        </span>

                        <span>
                            Continue with Google
                        </span>

                    </button>


                    {/* SIGN UP */}

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
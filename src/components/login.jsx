import React, { useState } from "react";
import "./login.css";

function Login({ onSignup }) {

    const [contact, setContact] = useState("");

    const handleGetOTP = (e) => {
        e.preventDefault();

        if (!contact) {
            alert("Please enter your email or mobile number");
            return;
        }

        alert("OTP will be sent to " + contact);
    };

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

                    <form onSubmit={handleGetOTP}>

                        <label htmlFor="contact">
                            Email or Mobile Number
                        </label>

                        <input
                            id="contact"
                            type="text"
                            placeholder="Enter email or mobile number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Get OTP
                        </button>

                    </form>


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
                        <span className="google-icon">G</span>
                        <span>Continue with Google</span>
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
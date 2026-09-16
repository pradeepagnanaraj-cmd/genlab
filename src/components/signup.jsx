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
            const response = await fetch(
                "http://localhost:5000/api/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Account created successfully!");

                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");

                onLogin();
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend");
        }
    };

    return (
        <div className="signup-page">

            <div className="signup-container">

                <div className="signup-image">
                    <img
                        src="/src/assets/auth-image.png"
                        alt="Sign Up"
                    />
                </div>

                <div className="signup-form">

                    <h1>Create Account</h1>

                    <p className="signup-subtitle">
                        Sign up to get started
                    </p>

                    <form onSubmit={handleSignup}>

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

                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />

                        <button
                            type="submit"
                            className="signup-button"
                        >
                            Sign Up
                        </button>

                    </form>

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
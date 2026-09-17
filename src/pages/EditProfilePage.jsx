import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./EditProfilePage.css";

function EditProfilePage() {
  const { user, setUser } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    mobile: user.mobile || user.phone || ""
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      ...formData,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || "User")}&background=0D7A57&color=fff`
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setSavedSuccess(true);
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="edit-profile-page container">
      <div className="edit-profile-card">
        <h1>Edit Profile</h1>
        <p>Update your account contact information.</p>

        {savedSuccess && (
          <div className="success-banner">
            ✅ Profile updated successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="edit-actions-row">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;

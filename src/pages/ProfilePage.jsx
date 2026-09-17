import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ItemCard from "../components/ItemCard";
import "./ProfilePage.css";

function ProfilePage() {
  const { user, items } = useApp();

  const userListings = items.filter(
    (item) => item.seller && (item.seller.id === user.id || item.seller.name === user.name)
  );

  const defaultAvatar =
    user.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "User")}&background=0D7A57&color=fff`;

  return (
    <div className="profile-page container">
      {/* Profile Header Banner */}
      <div className="profile-card">
        <div className="profile-banner-bg"></div>

        <div className="profile-main-row">
          <div className="avatar-wrapper">
            <img src={defaultAvatar} alt={user.name} className="profile-avatar-img" />
          </div>

          <div className="profile-details">
            <div className="profile-title-row">
              <h2>{user.name || "Authenticated Student"}</h2>
              <span className="verified-badge">✓ Verified Student</span>
            </div>

            <p className="profile-sub">School Supplies Exchange Member</p>

            <div className="profile-contact-info">
              <div className="info-badge">
                <span className="info-icon">✉️</span>
                <span><strong>Email:</strong> {user.email || "Not available"}</span>
              </div>
              <div className="info-badge">
                <span className="info-icon">📱</span>
                <span><strong>Mobile:</strong> {user.mobile || user.phone || "Not available"}</span>
              </div>
            </div>

            <div className="profile-stats-row">
              <div className="stat-pill">
                Active Listings: <strong>{userListings.length}</strong>
              </div>
              <div className="stat-pill">
                Supplies Shared: <strong>0</strong>
              </div>
            </div>
          </div>

          <div className="profile-action">
            <Link to="/edit-profile" className="edit-profile-btn">
              ⚙️ Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* User's Active Listings Section */}
      <div className="profile-listings-section">
        <div className="section-title-row">
          <h3>Active Listings by {user.name ? user.name.split(" ")[0] : "You"}</h3>
          <Link to="/post-item" className="post-link">
            + Post New Item
          </Link>
        </div>

        {userListings.length === 0 ? (
          <div className="empty-profile-listings">
            <span className="empty-box-icon">📦</span>
            <h4>No active supply listings yet</h4>
            <p>List your textbooks, calculators, or notebooks to help fellow students.</p>
            <Link to="/post-item" className="create-listing-btn">
              Post an Item Now →
            </Link>
          </div>
        ) : (
          <div className="profile-items-grid">
            {userListings.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;

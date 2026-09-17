import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./Navbar.css";

function Navbar({ onOpenLogin, onOpenSignup }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logoutUser, user, notifications } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logoutUser();
    setProfileDropdownOpen(false);
    navigate("/");
  };

  const userDisplayName = user?.name || user?.email?.split("@")[0] || "Student";
  const userAvatarUrl =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(userDisplayName)}&background=0D7A57&color=fff`;

  return (
    <header className="site-navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <div className="brand-logo-icon">
            <span>📚</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">School Supplies <span className="brand-highlight">Exchange</span></span>
            <span className="brand-tagline">Share • Reuse • Save</span>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="nav-menu">
          <Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/browse" className={`nav-item ${isActive("/browse") ? "active" : ""}`}>
            Browse
          </Link>
          <Link to="/post-item" className={`nav-item ${isActive("/post-item") ? "active" : ""}`}>
            Post Item
          </Link>
          <Link to="/about" className={`nav-item ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {isLoggedIn ? (
            <div className="user-nav-group">
              {/* Notifications Link */}
              <Link to="/notifications" className="icon-nav-btn" title="Notifications">
                🔔
                {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
              </Link>

              {/* Messages Link */}
              <Link to="/messages" className="icon-nav-btn" title="Messages">
                💬
              </Link>

              {/* User Profile Dropdown */}
              <div className="profile-dropdown-wrapper">
                <button
                  className="profile-trigger-btn"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                >
                  <img src={userAvatarUrl} alt={userDisplayName} className="nav-user-avatar" />
                  <span className="nav-user-name">{userDisplayName.split(" ")[0]}</span>
                  <span className="dropdown-arrow">▾</span>
                </button>

                {profileDropdownOpen && (
                  <div
                    className="profile-dropdown-menu"
                    onMouseLeave={() => setProfileDropdownOpen(false)}
                  >
                    <div className="dropdown-user-header">
                      <strong>{userDisplayName}</strong>
                      <small>{user?.email || "Authenticated User"}</small>
                    </div>
                    <hr />
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      👤 My Profile
                    </Link>
                    <Link
                      to="/my-listings"
                      className="dropdown-item"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      📦 My Listings
                    </Link>
                    <Link
                      to="/messages"
                      className="dropdown-item"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      💬 Messages
                    </Link>
                    <Link
                      to="/edit-profile"
                      className="dropdown-item"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      ⚙️ Edit Profile
                    </Link>
                    <hr />
                    <button className="dropdown-item logout-item" onClick={handleLogout}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="auth-nav-buttons">
              <button
                className="btn-auth-outline"
                onClick={onOpenLogin || (() => navigate("/login"))}
              >
                Login
              </button>
              <button
                className="btn-auth-solid"
                onClick={onOpenSignup || (() => navigate("/signup"))}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/browse" onClick={() => setMobileMenuOpen(false)}>Browse</Link>
          <Link to="/post-item" onClick={() => setMobileMenuOpen(false)}>Post Item</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact & Help</Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
              <Link to="/my-listings" onClick={() => setMobileMenuOpen(false)}>My Listings</Link>
              <button className="mobile-logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <div className="mobile-auth-row">
              <button
                className="btn-auth-outline"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenLogin) onOpenLogin();
                  else navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="btn-auth-solid"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSignup) onOpenSignup();
                  else navigate("/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;

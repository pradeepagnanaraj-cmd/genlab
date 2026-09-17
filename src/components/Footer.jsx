import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-info">
            <div className="footer-logo">
              <span className="footer-logo-icon">📚</span>
              <span className="footer-title">School Supplies Exchange</span>
            </div>
            <p className="footer-slogan">
              Share • Reuse • Save | A better tomorrow, one supply at a time.
            </p>
          </div>

          <div className="footer-links-group">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse Supplies</Link>
            <Link to="/post-item">Post an Item</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Help & Support</Link>
          </div>

          <div className="footer-socials">
            <a href="#facebook" title="Facebook" className="social-icon">f</a>
            <a href="#instagram" title="Instagram" className="social-icon">📷</a>
            <a href="#youtube" title="YouTube" className="social-icon">▶</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} School Supplies Exchange. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

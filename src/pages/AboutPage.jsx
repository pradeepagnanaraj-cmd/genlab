import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page container">
      {/* Hero Section */}
      <div className="about-hero">
        <span className="about-tag">🌱 Sustainable Student Economy</span>
        <h1>About School Supplies Exchange</h1>
        <p>
          Empowering students to share, reuse, and exchange essential educational supplies, reducing waste while making quality academic resources affordable for everyone.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="impact-stats-grid">
        <div className="impact-card">
          <span className="impact-icon">📚</span>
          <h3>10,000+</h3>
          <p>Textbooks & Supplies Shared</p>
        </div>
        <div className="impact-card">
          <span className="impact-icon">💰</span>
          <h3>$150,000+</h3>
          <p>Student Money Saved</p>
        </div>
        <div className="impact-card">
          <span className="impact-icon">♻️</span>
          <h3>5 Tons</h3>
          <p>Paper & Plastic Waste Prevented</p>
        </div>
        <div className="impact-card">
          <span className="impact-icon">🎓</span>
          <h3>25+</h3>
          <p>Partner Campus Communities</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="about-details-section">
        <div className="details-text-box">
          <h2>Our Mission</h2>
          <p>
            At many universities, students spend hundreds of dollars each semester on textbooks, graphing calculators, backpacks, and art supplies that end up sitting on shelves or tossed away after final exams.
          </p>
          <p>
            The <strong>School Supplies Exchange Platform</strong> was created to bridge this gap. We provide a safe, peer-to-peer campus marketplace where students can easily buy, sell, or donate gently used items directly to their fellow peers.
          </p>
        </div>

        <div className="details-text-box">
          <h2>Why Choose Us?</h2>
          <ul className="benefits-list">
            <li><strong>100% Student Focused:</strong> Verified campus profiles and safe meeting locations.</li>
            <li><strong>Affordable & Free Options:</strong> Access free donated items or buy at a fraction of retail prices.</li>
            <li><strong>Eco-Friendly Impact:</strong> Give unused notebooks, calculators, and books a second life.</li>
            <li><strong>Instant Communication:</strong> Built-in messaging tool for hassle-free coordination.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta-card">
        <h2>Ready to make a difference on campus?</h2>
        <p>Join thousands of students building a smarter, greener campus community today.</p>
        <div className="cta-buttons-row">
          <Link to="/browse" className="cta-primary-btn">Browse Supplies</Link>
          <Link to="/post-item" className="cta-secondary-btn">Post an Item</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

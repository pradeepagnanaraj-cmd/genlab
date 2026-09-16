import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">School Supplies</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to School Supplies Exchange</h1>

          <p>
            Buy, sell, or donate school supplies at affordable prices.
            Give your unused books and stationery a second life.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Browse Supplies</button>
            <button className="secondary-btn">Donate Supplies</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="book-card">
            📚
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="products">
        <h2>What You Can Do</h2>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Buy Supplies</h3>
            <p>
              Find useful books, stationery and other school supplies
              at affordable prices.
            </p>
            <button>Explore</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Sell Supplies</h3>
            <p>
              Sell your unused books and stationery to other students
              at a reasonable price.
            </p>
            <button>Sell Now</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Donate Supplies</h3>
            <p>
              Donate school supplies to students who need them and
              help reduce waste.
            </p>
            <button>Donate Now</button>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2>Why School Supplies Exchange?</h2>

          <p>
            Our platform connects students who want to buy, sell or
            donate school supplies. It helps students save money,
            reuse useful materials and support each other.
          </p>

          <div className="stats">
            <div>
              <h3>Affordable</h3>
              <p>Low-cost supplies</p>
            </div>

            <div>
              <h3>Reusable</h3>
              <p>Reduce waste</p>
            </div>

            <div>
              <h3>Student Friendly</h3>
              <p>Easy to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <h3>School Supplies Exchange</h3>
        <p>Buy • Sell • Donate • Reuse</p>
        <p>© 2026 School Supplies Exchange. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
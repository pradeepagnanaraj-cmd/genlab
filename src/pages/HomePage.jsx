import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import ItemCard from "../components/ItemCard";
import "./HomePage.css";

function HomePage({ onOpenLogin, onOpenSignup }) {
  const { categories, items } = useApp();
  const navigate = useNavigate();

  const featuredItems = items.slice(0, 6);

  return (
    <div className="home-page-view">
      <div className="container">
        {/* ================= HERO SECTION ================= */}
        <section className="hero-card-container">
          <div className="hero-content-col">
            <div className="hero-tag">
              <span className="tag-icon">🌱</span>
              <span>Give School Supplies a Second Life</span>
            </div>

            <h1 className="hero-heading">
              Buy, Sell or Exchange <span className="green-accent">School Supplies</span> Easily
            </h1>

            <p className="hero-subtext">
              Connect with students in your community to exchange, buy or sell gently used school supplies. Save money, reduce waste and help others.
            </p>

            {/* Hero Search Bar */}
            <div className="hero-search-box">
              <SearchBar placeholder="Search for items (e.g. notebooks, backpacks, calculators...)" />
            </div>

            {/* Value Props Bar */}
            <div className="hero-benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">🍃</span>
                <div className="benefit-text">
                  <strong>Save Money</strong>
                  <p>Get supplies at lower prices</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">♻️</span>
                <div className="benefit-text">
                  <strong>Reduce Waste</strong>
                  <p>Give items a second life</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">👥</span>
                <div className="benefit-text">
                  <strong>Support Community</strong>
                  <p>Help fellow students</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-icon">🛡️</span>
                <div className="benefit-text">
                  <strong>Safe & Trusted</strong>
                  <p>Verified users & secure platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Illustration Right */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src="/src/assets/hero-backpack.jpg"
                alt="School Backpack & Supplies"
                className="hero-main-img"
              />
              <div className="hero-floating-badge">
                <span className="badge-text">Small Changes Make a Big Impact ~ 🌱</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= POPULAR CATEGORIES ================= */}
        <section className="home-section popular-categories-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Popular Categories</h2>
              <p className="section-subtitle">Find the supplies you need, or post what you don't use anymore.</p>
            </div>
            <Link to="/browse" className="view-all-link">
              View All →
            </Link>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                name={cat.name}
                icon={cat.icon}
                bgColor={cat.bgColor}
                color={cat.color}
                count={cat.count}
              />
            ))}
          </div>
        </section>

        {/* ================= RECENT LISTINGS ================= */}
        <section className="home-section recent-listings-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recently Added Supplies</h2>
              <p className="section-subtitle">Check out the latest items listed by students on campus.</p>
            </div>
            <Link to="/browse" className="view-all-link">
              Browse All ({items.length}) →
            </Link>
          </div>

          <div className="items-grid">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="home-section how-it-works-section">
          <div className="section-header center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">It's simple, safe and quick!</p>
          </div>

          <div className="how-it-works-content">
            <div className="steps-flow">
              <div className="step-card">
                <div className="step-badge">1</div>
                <div className="step-icon">👤</div>
                <h3>Sign Up</h3>
                <p>Create your free account in minutes.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step-card">
                <div className="step-badge">2</div>
                <div className="step-icon">🔍</div>
                <h3>Find or Post</h3>
                <p>Search for supplies or list what you have.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step-card">
                <div className="step-badge">3</div>
                <div className="step-icon">💬</div>
                <h3>Connect</h3>
                <p>Chat with other users and make a deal.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step-card">
                <div className="step-badge">4</div>
                <div className="step-icon">📦</div>
                <h3>Exchange</h3>
                <p>Get your supplies and make a difference!</p>
              </div>
            </div>

            {/* Sustainability Green Banner Box */}
            <div className="sustainability-box">
              <div className="sustainability-content">
                <div className="sustainability-icon">🌍</div>
                <h3>Together we can build a more sustainable and supportive community!</h3>
                <button
                  className="sustainability-btn"
                  onClick={() => navigate("/post-item")}
                >
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;

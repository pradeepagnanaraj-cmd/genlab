import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ItemCard from "../components/ItemCard";
import "./ItemDetailsPage.css";

function ItemDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, favorites, toggleFavorite, isLoggedIn, user, conversations } = useApp();

  const item = items.find((i) => i.id === id) || items[0];
  const isFavorite = favorites.includes(item.id);
  const isOwner = user && item.seller && item.seller.id === user.id;

  const relatedItems = items
    .filter((i) => i.id !== item.id && i.category === item.category)
    .slice(0, 3);

  const handleMessageSeller = () => {
    if (!isLoggedIn) {
      alert("Please log in to chat with the seller.");
      navigate("/login");
      return;
    }
    navigate("/messages");
  };

  return (
    <div className="item-details-page container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Browse
      </button>

      <div className="details-card-wrapper">
        {/* Left Column: Image */}
        <div className="details-image-col">
          <div className="main-image-container">
            <img src={item.image} alt={item.title} className="details-main-img" />
            <button
              className={`details-fav-btn ${isFavorite ? "active" : ""}`}
              onClick={() => toggleFavorite(item.id)}
            >
              {isFavorite ? "❤️ Saved" : "🤍 Save to Favorites"}
            </button>
          </div>
        </div>

        {/* Right Column: Info & Seller */}
        <div className="details-info-col">
          <div className="details-meta-row">
            <span className="details-category">{item.category}</span>
            <span className="badge-condition">{item.condition}</span>
          </div>

          <h1 className="details-title">{item.title}</h1>

          <div className="details-price-row">
            {item.isFree || item.price === 0 ? (
              <span className="badge-free-large">FREE / DONATION</span>
            ) : (
              <span className="badge-price-large">${Number(item.price).toFixed(2)}</span>
            )}
            <span className="details-posted-date">Posted {item.postedDate}</span>
          </div>

          <div className="details-location-box">
            <span className="location-pin">📍</span>
            <div>
              <strong>Pickup Location</strong>
              <p>{item.location}</p>
            </div>
          </div>

          <div className="details-description">
            <h3>Item Description</h3>
            <p>{item.description}</p>
          </div>

          {/* Seller Card */}
          <div className="seller-card shadow-sm">
            <div className="seller-header">
              <img
                src={item.seller?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"}
                alt={item.seller?.name}
                className="seller-big-avatar"
              />
              <div className="seller-info-text">
                <div className="seller-name-row">
                  <h4>{item.seller?.name || "Campus Student"}</h4>
                  {item.seller?.verified && <span className="verified-badge">✓ Verified</span>}
                </div>
                <div className="seller-rating">
                  ⭐ {item.seller?.rating || 5.0} ({item.seller?.reviewsCount || 10} reviews)
                </div>
                <small className="seller-joined">Member since {item.seller?.joined || "2024"}</small>
              </div>
            </div>

            <div className="seller-actions">
              {!isOwner ? (
                <button className="contact-seller-btn" onClick={handleMessageSeller}>
                  💬 Message Seller
                </button>
              ) : (
                <button
                  className="contact-seller-btn"
                  onClick={() => navigate("/my-listings")}
                >
                  ⚙️ Manage Listing
                </button>
              )}
            </div>
          </div>

          {/* Safety Notice */}
          <div className="safety-notice-box">
            <span className="shield-icon">🛡️</span>
            <p>
              <strong>Safety Tip:</strong> Meet in public campus areas (e.g. Student Union, Library) and inspect items before completing the transaction.
            </p>
          </div>
        </div>
      </div>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="related-supplies-section">
          <h2>Similar Supplies You Might Need</h2>
          <div className="related-grid">
            {relatedItems.map((relItem) => (
              <ItemCard key={relItem.id} item={relItem} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ItemDetailsPage;

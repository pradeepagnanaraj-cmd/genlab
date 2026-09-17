import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./ItemCard.css";

function ItemCard({ item, onEdit, onDelete }) {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, user } = useApp();

  const isFavorite = favorites.includes(item.id);
  const isOwner = user && item.seller && item.seller.id === user.id;

  const handleCardClick = (e) => {
    // If clicking action buttons, don't navigate
    if (e.target.closest('.card-action-btn') || e.target.closest('.fav-btn')) return;
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="item-card" onClick={handleCardClick}>
      <div className="item-card-image-wrapper">
        <img src={item.image} alt={item.title} className="item-card-image" />
        
        {/* Price / Free Badge */}
        <div className="item-card-badge-top">
          {item.isFree || item.price === 0 ? (
            <span className="badge-free">FREE</span>
          ) : (
            <span className="badge-price">${Number(item.price).toFixed(2)}</span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          className={`fav-btn ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(item.id);
          }}
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="item-card-content">
        <div className="item-card-meta">
          <span className="item-category-tag">{item.category}</span>
          <span className="badge-condition">{item.condition}</span>
        </div>

        <h3 className="item-card-title">{item.title}</h3>

        <div className="item-card-location">
          <span className="location-icon">📍</span>
          <span className="location-text">{item.location}</span>
        </div>

        <div className="item-card-footer">
          <div className="item-seller">
            <img
              src={item.seller?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"}
              alt={item.seller?.name}
              className="seller-avatar"
            />
            <span className="seller-name">{item.seller?.name || "Student"}</span>
          </div>

          {isOwner && (onEdit || onDelete) ? (
            <div className="item-owner-actions">
              {onEdit && (
                <button
                  className="card-action-btn edit-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(item);
                  }}
                  title="Edit Item"
                >
                  ✏️
                </button>
              )}
              {onDelete && (
                <button
                  className="card-action-btn delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                  }}
                  title="Delete Item"
                >
                  🗑️
                </button>
              )}
            </div>
          ) : (
            <button
              className="item-view-btn"
              onClick={handleCardClick}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ id, name, icon, bgColor, color, count }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/browse?category=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="category-card"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      <div className="category-icon-wrapper">
        <span className="category-icon">{icon}</span>
      </div>
      <h3 className="category-name">{name}</h3>
      {count !== undefined && <span className="category-count">{count} items</span>}
    </div>
  );
}

export default CategoryCard;

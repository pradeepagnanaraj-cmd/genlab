import React from "react";
import { CATEGORIES } from "../data/mockData";
import "./Filter.css";

function Filter({ filters, setFilters, onReset }) {
  const handleCategoryChange = (catName) => {
    setFilters((prev) => ({ ...prev, category: catName }));
  };

  const handleTypeChange = (type) => {
    setFilters((prev) => ({ ...prev, type }));
  };

  const handleConditionChange = (condition) => {
    setFilters((prev) => ({ ...prev, condition }));
  };

  const handleLocationChange = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>Filter Supplies</h3>
        {onReset && (
          <button className="reset-filter-btn" onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      {/* Category Section */}
      <div className="filter-group">
        <label className="filter-group-title">Category</label>
        <div className="category-filter-list">
          <button
            className={`filter-chip ${filters.category === "All" ? "active" : ""}`}
            onClick={() => handleCategoryChange("All")}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-chip ${filters.category === cat.name ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.name)}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Type */}
      <div className="filter-group">
        <label className="filter-group-title">Offer Type</label>
        <div className="radio-filter-options">
          <label className="radio-label">
            <input
              type="radio"
              name="offerType"
              checked={filters.type === "All"}
              onChange={() => handleTypeChange("All")}
            />
            All Items
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="offerType"
              checked={filters.type === "Free"}
              onChange={() => handleTypeChange("Free")}
            />
            Free / Donate Only
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="offerType"
              checked={filters.type === "Paid"}
              onChange={() => handleTypeChange("Paid")}
            />
            For Sale (Paid)
          </label>
        </div>
      </div>

      {/* Condition */}
      <div className="filter-group">
        <label className="filter-group-title">Condition</label>
        <select
          className="filter-select"
          value={filters.condition}
          onChange={(e) => handleConditionChange(e.target.value)}
        >
          <option value="All">Any Condition</option>
          <option value="Brand New">Brand New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>

      {/* Location */}
      <div className="filter-group">
        <label className="filter-group-title">Location / Campus</label>
        <input
          type="text"
          className="filter-text-input"
          placeholder="e.g. Central Library, Dorms..."
          value={filters.location}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
}

export default Filter;

import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ItemCard from "../components/ItemCard";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import "./BrowsePage.css";

function BrowsePage() {
  const { items } = useApp();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";

  const [filters, setFilters] = useState({
    category: categoryParam,
    type: "All",
    condition: "All",
    location: ""
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (filters.category !== "All" && item.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      // Type filter (Free vs Paid)
      if (filters.type === "Free" && !item.isFree && item.price !== 0) return false;
      if (filters.type === "Paid" && (item.isFree || item.price === 0)) return false;

      // Condition filter
      if (filters.condition !== "All" && item.condition.toLowerCase() !== filters.condition.toLowerCase()) {
        return false;
      }
      // Location filter
      if (filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      // Search query
      if (searchQuery) {
        const queryLower = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(queryLower);
        const matchesDesc = item.description.toLowerCase().includes(queryLower);
        if (!matchesTitle && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
      return 0; // Default newest
    });
  }, [items, filters, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setFilters({
      category: "All",
      type: "All",
      condition: "All",
      location: ""
    });
    setSearchQuery("");
  };

  return (
    <div className="browse-page container">
      <div className="browse-header">
        <div>
          <h1>Browse School Supplies</h1>
          <p>Find textbooks, stationery, calculators, backpacks and more from fellow students.</p>
        </div>
        <div className="browse-search-wrapper">
          <SearchBar
            initialQuery={searchQuery}
            onSearch={(query) => setSearchQuery(query)}
            placeholder="Search supplies..."
          />
        </div>
      </div>

      <div className="browse-layout">
        {/* Sidebar Filters */}
        <aside className="browse-sidebar">
          <Filter
            filters={filters}
            setFilters={setFilters}
            onReset={handleResetFilters}
          />
        </aside>

        {/* Main Content Grid */}
        <main className="browse-main-content">
          <div className="browse-toolbar">
            <span className="results-count">
              Showing <strong>{filteredItems.length}</strong> supplies
            </span>

            <div className="sort-wrapper">
              <label htmlFor="sortBy">Sort by:</label>
              <select
                id="sortBy"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No supplies found matching your criteria</h3>
              <p>Try resetting filters or searching with different keywords.</p>
              <button className="reset-btn" onClick={handleResetFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="browse-grid">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default BrowsePage;

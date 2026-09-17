import React, { useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import "./SearchResultsPage.css";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";
  const { items } = useApp();
  const navigate = useNavigate();

  const results = useMemo(() => {
    return items.filter((item) => {
      const qLower = query.toLowerCase();
      const matchesText =
        !query ||
        item.title.toLowerCase().includes(qLower) ||
        item.description.toLowerCase().includes(qLower) ||
        item.category.toLowerCase().includes(qLower);
      const matchesCat =
        !categoryParam || item.category.toLowerCase() === categoryParam.toLowerCase();

      return matchesText && matchesCat;
    });
  }, [items, query, categoryParam]);

  return (
    <div className="search-results-page container">
      <div className="search-results-header">
        <h1>Search Results</h1>
        <p>
          Showing matches for {query ? <strong>"{query}"</strong> : "all items"}
          {categoryParam && <span> in category <strong>"{categoryParam}"</strong></span>}
        </p>

        <div className="search-page-bar">
          <SearchBar initialQuery={query} />
        </div>
      </div>

      <div className="search-results-toolbar">
        <span className="results-badge">{results.length} items found</span>
        <button
          className="clear-search-btn"
          onClick={() => navigate("/browse")}
        >
          View All Supplies
        </button>
      </div>

      {results.length === 0 ? (
        <div className="search-empty-state">
          <span className="empty-emoji">🔎</span>
          <h2>No matching school supplies found</h2>
          <p>Try checking for spelling errors, using simpler keywords, or expanding your category search.</p>
        </div>
      ) : (
        <div className="search-results-grid">
          {results.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;

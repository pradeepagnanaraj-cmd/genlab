import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostItemPage from "./PostItemPage";
import "./SellDonatePage.css";

function SellDonatePage() {
  const [mode, setMode] = useState("sell"); // 'sell' or 'donate'
  const navigate = useNavigate();

  return (
    <div className="sell-donate-page container">
      <div className="sell-donate-hero">
        <h1>Sell or Donate Your School Supplies</h1>
        <p>Give your used books, calculators, and stationery a second life while helping other students save.</p>

        <div className="mode-toggle-buttons">
          <button
            className={`mode-btn ${mode === "sell" ? "active" : ""}`}
            onClick={() => setMode("sell")}
          >
            🏷️ Sell Supplies (Earn Cash)
          </button>
          <button
            className={`mode-btn ${mode === "donate" ? "active" : ""}`}
            onClick={() => setMode("donate")}
          >
            🎁 Donate Supplies (Free)
          </button>
        </div>
      </div>

      <div className="mode-banner">
        {mode === "sell" ? (
          <div className="banner-box sell-box">
            <h3>Earn Money by Selling Unused Supplies</h3>
            <p>Set a fair price and connect directly with students on campus looking for low-cost academic resources.</p>
          </div>
        ) : (
          <div className="banner-box donate-box">
            <h3>Make a Big Impact by Donating</h3>
            <p>Help students in need and earn community sustainability karma points! Free items get claimed 3x faster.</p>
          </div>
        )}
      </div>

      <PostItemPage />
    </div>
  );
}

export default SellDonatePage;

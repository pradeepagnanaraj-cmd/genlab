import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { CATEGORIES } from "../data/mockData";
import "./PostItemPage.css";

function PostItemPage() {
  const navigate = useNavigate();
  const { addItem, isLoggedIn } = useApp();

  const [formData, setFormData] = useState({
    title: "",
    category: "Books",
    description: "",
    condition: "Like New",
    price: "",
    isFree: false,
    location: "Student Union / Main Library",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  });

  const [previewImage, setPreviewImage] = useState(formData.image);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setPreviewImage(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newItem = addItem({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      condition: formData.condition,
      price: formData.isFree ? 0 : parseFloat(formData.price || 0),
      isFree: formData.isFree,
      location: formData.location,
      image: formData.image || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
    });

    setSuccessMsg(true);
    setTimeout(() => {
      navigate("/my-listings");
    }, 1200);
  };

  return (
    <div className="post-item-page container">
      <div className="post-item-card">
        <div className="post-item-header">
          <h1>Post School Supplies</h1>
          <p>List your unused books, calculators, backpacks or stationery for fellow students.</p>
        </div>

        {successMsg && (
          <div className="success-banner">
            🎉 Your supply item has been listed successfully! Redirecting to My Listings...
          </div>
        )}

        <form onSubmit={handleSubmit} className="post-item-form">
          {/* Item Name */}
          <div className="form-group">
            <label htmlFor="title">Item Name / Title *</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Thomas Calculus 14th Ed. / TI-84 Graphing Calculator"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Condition */}
            <div className="form-group">
              <label htmlFor="condition">Condition *</label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
              >
                <option value="Brand New">Brand New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
          </div>

          {/* Pricing & Free Option */}
          <div className="form-group pricing-group">
            <div className="free-checkbox-row">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="isFree"
                  checked={formData.isFree}
                  onChange={handleChange}
                />
                <span className="checkbox-label">🎁 Donate for FREE (Give items a second life)</span>
              </label>
            </div>

            {!formData.isFree && (
              <div className="price-input-wrapper">
                <label htmlFor="price">Price ($)</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="e.g. 15.00"
                  value={formData.price}
                  onChange={handleChange}
                  required={!formData.isFree}
                />
              </div>
            )}
          </div>

          {/* Pickup Location */}
          <div className="form-group">
            <label htmlFor="location">Campus Pickup Location *</label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Student Union, Library Block A, North Quad"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL / Preview */}
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Paste image link or use default placeholder"
              value={formData.image}
              onChange={handleImageChange}
            />
            {previewImage && (
              <div className="image-preview-box">
                <img src={previewImage} alt="Preview" />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Detailed Description *</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Describe condition, edition, included accessories, or pickup time preferences..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-post-btn">
            Publish Supply Listing →
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostItemPage;

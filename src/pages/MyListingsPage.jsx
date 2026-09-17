import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import ItemCard from "../components/ItemCard";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { CATEGORIES } from "../data/mockData";
import "./MyListingsPage.css";

function MyListingsPage() {
  const { items, deleteItem, updateItem, user } = useApp();

  // Filter items created by current user (or fallback to items created in session)
  const myItems = items.filter(
    (item) => item.seller && (item.seller.id === user.id || item.seller.name === user.name)
  );

  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingItem) return;
    updateItem(editingItem.id, editingItem);
    setEditingItem(null);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId) {
      deleteItem(deleteConfirmId);
      setDeleteConfirmId(null);
    }
  };

  return (
    <div className="my-listings-page container">
      <div className="my-listings-header">
        <div>
          <h1>My Posted Listings</h1>
          <p>Manage, edit, or remove school supplies you have posted for exchange.</p>
        </div>
        <Link to="/post-item" className="post-new-btn">
          + Post New Item
        </Link>
      </div>

      {myItems.length === 0 ? (
        <div className="empty-listings-box">
          <span className="box-icon">📦</span>
          <h2>You haven't posted any items yet</h2>
          <p>Have extra textbooks, backpacks, or notebooks? Help a fellow student today!</p>
          <Link to="/post-item" className="post-new-btn mt-2">
            Post an Item Now →
          </Link>
        </div>
      ) : (
        <div className="my-listings-grid">
          {myItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onEdit={(itemToEdit) => setEditingItem({ ...itemToEdit })}
              onDelete={(idToDelete) => setDeleteConfirmId(idToDelete)}
            />
          ))}
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <Modal
          isOpen={Boolean(editingItem)}
          onClose={() => setEditingItem(null)}
          title="Edit Listing Information"
        >
          <form onSubmit={handleSaveEdit} className="edit-modal-form">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={editingItem.title}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, title: e.target.value })
                }
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select
                  value={editingItem.category}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, category: e.target.value })
                  }
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Condition</label>
                <select
                  value={editingItem.condition}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, condition: e.target.value })
                  }
                >
                  <option value="Brand New">Brand New</option>
                  <option value="Like New">Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Price ($)</label>
              <input
                type="number"
                step="0.01"
                value={editingItem.price}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    price: parseFloat(e.target.value || 0),
                    isFree: parseFloat(e.target.value || 0) === 0
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={editingItem.location}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, location: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="3"
                value={editingItem.description}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, description: e.target.value })
                }
                required
              />
            </div>

            <div className="modal-actions-row">
              <Button variant="outline" onClick={() => setEditingItem(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <Modal
          isOpen={Boolean(deleteConfirmId)}
          onClose={() => setDeleteConfirmId(null)}
          title="Confirm Delete Listing"
        >
          <div className="delete-confirm-body">
            <p>Are you sure you want to delete this listing? This action cannot be undone.</p>
            <div className="modal-actions-row mt-4">
              <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirmDelete}>
                Yes, Delete Item
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MyListingsPage;

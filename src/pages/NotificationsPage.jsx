import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./NotificationsPage.css";

function NotificationsPage() {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useApp();

  return (
    <div className="notifications-page container">
      <div className="notifications-card">
        <div className="notif-header">
          <div>
            <h1>Notifications</h1>
            <p>Stay updated on messages, listed items, and community activities.</p>
          </div>
          <button className="mark-all-read-btn" onClick={markAllNotificationsAsRead}>
            Mark All as Read
          </button>
        </div>

        {notifications.length === 0 ? (
          <div className="empty-notif-box">
            <span className="notif-emoji">🔔</span>
            <h3>No notifications yet</h3>
            <p>You'll receive updates here when someone contacts you about your supplies.</p>
          </div>
        ) : (
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`notif-item ${notif.read ? "read" : "unread"}`}
                onClick={() => markNotificationAsRead(notif.id)}
              >
                <div className="notif-icon-col">
                  {notif.type === "message" ? "💬" : notif.type === "alert" ? "❤️" : "🔔"}
                </div>

                <div className="notif-content-col">
                  <div className="notif-title-row">
                    <h4>{notif.title}</h4>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                  <p>{notif.message}</p>
                </div>

                {!notif.read && <span className="unread-dot"></span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationsPage;

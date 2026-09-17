import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import "./MessagesPage.css";

function MessagesPage() {
  const { conversations, sendMessage, user } = useApp();
  const [activeConvId, setActiveConvId] = useState(conversations[0]?.id || null);
  const [inputText, setInputText] = useState("");

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConvId) return;
    sendMessage(activeConvId, inputText);
    setInputText("");
  };

  return (
    <div className="messages-page container">
      <div className="messages-card">
        {/* Conversations Sidebar */}
        <aside className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h2>Messages</h2>
          </div>
          <div className="conversations-list">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${conv.id === activeConvId ? "active" : ""}`}
                onClick={() => setActiveConvId(conv.id)}
              >
                <div className="avatar-status-wrapper">
                  <img
                    src={conv.partner.avatar}
                    alt={conv.partner.name}
                    className="partner-avatar"
                  />
                  {conv.partner.online && <span className="online-indicator"></span>}
                </div>
                <div className="conv-info">
                  <div className="conv-top-row">
                    <span className="partner-name">{conv.partner.name}</span>
                    <span className="conv-time">{conv.lastUpdated}</span>
                  </div>
                  <p className="item-snippet-text">{conv.item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Thread View */}
        <main className="chat-thread-main">
          {activeConv ? (
            <>
              {/* Thread Header */}
              <div className="chat-thread-header">
                <div className="partner-header-info">
                  <img
                    src={activeConv.partner.avatar}
                    alt={activeConv.partner.name}
                    className="partner-avatar-small"
                  />
                  <div>
                    <h3>{activeConv.partner.name}</h3>
                    <small>{activeConv.partner.online ? "Online" : "Offline"}</small>
                  </div>
                </div>

                <div className="item-header-card">
                  <span className="item-header-title">{activeConv.item.title}</span>
                  <span className="item-header-price">{activeConv.item.price}</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="messages-body">
                {activeConv.messages.map((msg) => {
                  const isMe = msg.sender === user.id;
                  return (
                    <div
                      key={msg.id}
                      className={`message-bubble-wrapper ${isMe ? "me" : "them"}`}
                    >
                      <div className="message-bubble">
                        <p>{msg.text}</p>
                        <span className="msg-timestamp">{msg.timestamp}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Send Input */}
              <form className="chat-input-area" onSubmit={handleSend}>
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Type your message about this supply..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="chat-send-btn">
                  Send ➔
                </button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              <span className="chat-icon">💬</span>
              <p>Select a conversation to view message history.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default MessagesPage;

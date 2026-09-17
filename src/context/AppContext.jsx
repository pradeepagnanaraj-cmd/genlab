import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_ITEMS, CATEGORIES, INITIAL_NOTIFICATIONS, INITIAL_CONVERSATIONS } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user:", e);
      }
    }
    return {
      id: "",
      name: "Student User",
      email: "",
      mobile: "",
      avatar: ""
    };
  });

  const [items, setItems] = useState(INITIAL_ITEMS);
  const [favorites, setFavorites] = useState([]);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error(e);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const loginUser = (token, userData) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    if (userData) {
      const formattedUser = {
        id: userData.id || Date.now().toString(),
        name: userData.name || userData.email?.split("@")[0] || "Student User",
        email: userData.email || userData.contact || "",
        mobile: userData.mobile || (userData.contact && !userData.contact.includes("@") ? userData.contact : ""),
        avatar: userData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name || userData.email || "Student")}&background=0D7A57&color=fff`
      };
      localStorage.setItem("user", JSON.stringify(formattedUser));
      setUser(formattedUser);
    }
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({
      id: "",
      name: "Student User",
      email: "",
      mobile: "",
      avatar: ""
    });
  };

  const addItem = (newItem) => {
    const itemToAdd = {
      ...newItem,
      id: Date.now().toString(),
      postedDate: "Just now",
      views: 1,
      seller: {
        id: user.id || Date.now().toString(),
        name: user.name || "Student",
        avatar: user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || "Student")}&background=0D7A57&color=fff`,
        rating: 5.0,
        reviewsCount: 1,
        verified: true,
        joined: "2026"
      }
    };
    setItems((prev) => [itemToAdd, ...prev]);
    return itemToAdd;
  };

  const updateItem = (itemId, updatedFields) => {
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteItem = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
    setFavorites((prev) => prev.filter((id) => id !== itemId));
  };

  const toggleFavorite = (itemId) => {
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const sendMessage = (conversationId, text) => {
    if (!text.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: user.id || "me",
      text: text.trim(),
      timestamp: "Just now"
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            messages: [...conv.messages, newMsg],
            lastUpdated: "Just now"
          };
        }
        return conv;
      })
    );
  };

  const markNotificationAsRead = (notifId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notifId ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        loginUser,
        logoutUser,
        user,
        setUser,
        items,
        categories: CATEGORIES,
        favorites,
        toggleFavorite,
        addItem,
        updateItem,
        deleteItem,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        conversations,
        sendMessage,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

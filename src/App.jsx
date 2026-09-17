import React from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useApp } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./components/login";
import Signup from "./components/signup";

import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import PostItemPage from "./pages/PostItemPage";
import SellDonatePage from "./pages/SellDonatePage";
import MyListingsPage from "./pages/MyListingsPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import MessagesPage from "./pages/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Protected Route Wrapper Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useApp();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const navigate = useNavigate();
  const { isLoggedIn, loginUser } = useApp();

  // If NOT logged in, show Login or Signup pages only
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route
          path="/signup"
          element={
            <Signup
              onLogin={() => navigate("/login")}
            />
          }
        />
        <Route
          path="*"
          element={
            <Login
              onSignup={() => navigate("/signup")}
              onLoginSuccess={() => {
                const token = localStorage.getItem("token") || "authenticated-token";
                loginUser(token);
                navigate("/home");
              }}
            />
          }
        />
      </Routes>
    );
  }

  // Once Logged in, show full Platform Layout & Pages
  return (
    <div className="app-main-layout">
      <Navbar
        onOpenLogin={() => navigate("/login")}
        onOpenSignup={() => navigate("/signup")}
      />

      <main className="app-content-body">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <BrowsePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <SearchResultsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/item/:id"
            element={
              <ProtectedRoute>
                <ItemDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-item"
            element={
              <ProtectedRoute>
                <PostItemPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sell-donate"
            element={
              <ProtectedRoute>
                <SellDonatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-listings"
            element={
              <ProtectedRoute>
                <MyListingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Navigate to="/home" replace />} />
          <Route path="/signup" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
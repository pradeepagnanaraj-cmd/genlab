import React from "react";
import HomePage from "../pages/HomePage";

function Home({ onOpenLogin, onOpenSignup }) {
  return <HomePage onOpenLogin={onOpenLogin} onOpenSignup={onOpenSignup} />;
}

export default Home;
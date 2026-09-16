import { useState } from "react";

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return (
      <Login
        onSignup={() => setPage("signup")}
        onLoginSuccess={() => setPage("home")}
      />
    );
  }

  if (page === "signup") {
    return (
      <Signup
        onLogin={() => setPage("login")}
      />
    );
  }

  if (page === "home") {
    return <Home />;
  }
}

export default App;
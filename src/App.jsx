import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [page, setPage] = useState("login");

  return page === "login" ? (
    <Login onSignup={() => setPage("signup")} />
  ) : (
    <Signup onLogin={() => setPage("login")} />
  );
}

export default App; 
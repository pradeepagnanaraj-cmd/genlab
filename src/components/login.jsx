import "./login.css";
import image from "../assets/auth-image.png";

function Login({ onSignup }) {
  return (
    <div className="login">

      <div className="form">
        <h2>Login</h2>

        <p>Welcome back! Please login to your account.</p>

        <input type="text" placeholder="Username" />

        <input type="password" placeholder="Password" />

        <a href="#">Forgot password?</a>

        <button>Login</button>

        <p>
          Don't have an account?
          <button onClick={onSignup}>Sign Up</button>
        </p>
      </div>

      <div className="image">
        <img src={image} alt="Login" />
      </div>

    </div>
  );
}

export default Login;
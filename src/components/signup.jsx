import "./signup.css";
import image from "../assets/auth-image.png";

function Signup({ onLogin }) {
  return (
    <div className="page">
      <div className="box">

        <div className="form">
          <h1>Sign Up</h1>
          <p>Create your account.</p>

          <input type="text" placeholder="Username" />

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <input type="password" placeholder="Confirm Password" />

          <button className="main-button">Sign Up</button>

          <p className="bottom">
            Already have an account?
            <button onClick={onLogin} className="link-button">
              Login
            </button>
          </p>
        </div>

        <div className="image">
          <img src={image} alt="Signup illustration" />
        </div>

      </div>
    </div>
  );
}

export default Signup;
import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="card">
        <h2>login</h2>
        <input placeholder="Email" type="email"></input>
        <br />
        <input placeholder="Password" type="password"></input>
        <br />
        <a href="#">Forgot Password?</a>
        <br />
        <button>Login</button>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </>
  );
}

export default Login;

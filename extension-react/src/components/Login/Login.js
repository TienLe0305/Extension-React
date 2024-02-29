import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import googleLogo from "../../assets/images/gg-logo.png";

function Login(props) {
  return (
    <div className="login-screen">
      <h1>SIGN IN</h1>
      <span className="description">Sign in and start use CWA-Assistant</span>
      <div className="input">
        <input className="username" placeholder="Username"></input>
        <input className="password" placeholder="Password"></input>
      </div>
      <div className="options">
        <div className="remember">
          <input type="checkbox" className="remember-checkbox"></input>
          <span>Remember me</span>
        </div>
        <span className="forgot">Forgot password?</span>
      </div>
      <div className="form-login">
        <button className="login">Login</button>
        <span>or</span>
        <button className="gg-login">
          <img
            src={googleLogo}
            alt="Google Logo"
            className="google-logo"
            width="25"
            height="25"
          />
          Sign in with Google
          <div></div>
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;

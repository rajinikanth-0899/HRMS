import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { IoIosEyeOff } from "react-icons/io";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    const validEmail = "raj@gmail.com";
    const validPassword = "0899";

    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg"
          alt="HRMS Graphic"
          className="login-left-img"
        />
      </div>

      <div className="login-right">
        <div className="login-header">
          <img src="/Dream.jpeg" alt="Dream Logo" className="login-logo" />
          <h2 className="login-tagline">DREAM BIG</h2>
        </div>

        <img
          src="https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg"
          alt="HRMS Illustration"
          className="login-illustration"
        />

        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoIosEyeOff /> : <FaRegEye />}
            </span>
          </div>
        </div>


        {error && <p className="login-error">{error}</p>}

        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>

        <a href="#" className="login-forgot-password">
          FORGOT PASSWORD?
        </a>
      </div>
    </div>
  );
};

export default Login;

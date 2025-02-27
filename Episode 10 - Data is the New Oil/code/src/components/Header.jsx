import { CiShoppingCart } from "react-icons/ci";

import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../styles/Header.css";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="BellyBox" />
      </div>

      <div>{isOnline ? "✅ Online" : "❌ Disconnected"}</div>

      <div>{loggedInUser ? loggedInUser.slice(0, 20) : ""}</div>

      <div className="nav-items">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="nav-links">{<CiShoppingCart size={28} />}</Link>
          </li>

          {isLoggedIn ? (
            <button
              className="logout-btn"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

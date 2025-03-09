import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../styles/Header.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

 // subscribing to the store using selector
 const totalItems = useSelector((store) => store.cart.totalItems);

  // Never do this
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;
  // console.log("cartItems", cartItems);

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
            <Link className={`nav-links${
                totalItems === 0 ? "py-2" : "py-0"
            }`} to= "/Cart">
                
              {<FaCartArrowDown size={28} />}
              {totalItems  !== 0 && (
                <span className="countOfItems">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>

          {isLoggedIn ? (
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

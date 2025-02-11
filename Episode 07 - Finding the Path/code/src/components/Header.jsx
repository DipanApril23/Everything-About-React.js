import { CiShoppingCart } from "react-icons/ci";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {

  const [btnName , setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= { LOGO_URL }
          alt="BellyBox"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="nav-links" to="/">Home</Link></li>
          <li><Link className="nav-links" to="/about">About Us</Link></li>
          <li><Link className="nav-links" to="/contact">Contact Us</Link></li>
          <li><Link className="nav-links">{<CiShoppingCart size={28} />}</Link></li>

          <button className="login" onClick={() => {
            btnName === "Login" ? 
            setBtnName("Logout") :
            setBtnName("Login");
          }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
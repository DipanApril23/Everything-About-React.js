import { CiShoppingCart } from "react-icons/ci";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="cart-icon">{<CiShoppingCart size={28} />}</li>
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
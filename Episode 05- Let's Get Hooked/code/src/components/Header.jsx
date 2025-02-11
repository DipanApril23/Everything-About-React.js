import { CiShoppingCart } from "react-icons/ci";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
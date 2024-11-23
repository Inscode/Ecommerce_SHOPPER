import React from "react";
import "./Footer.css";
import shopLogo from "../Assets/shopping.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          width="100px"
          height="100px"
          src={shopLogo}
          alt=""
          className="shop-logo"
        />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src="" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

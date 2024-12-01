import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/shopping.png";
import navProfile from "../../assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={navLogo}
        width="80px"
        height="80px"
        alt=""
        className="nav-logo"
      />
      <h2>Admin Panel</h2>
      <img
        src={navProfile}
        width="80px"
        height="80px"
        alt=""
        className="nav-profile"
      />
    </div>
  );
};

export default Navbar;

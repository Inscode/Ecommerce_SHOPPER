import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/shopping.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_icon from "../Assets/drop_down.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="shop logo" className="shop-logo"></img>
        <p>SHOPPER</p>
      </div>

      <img
        src={drop_icon}
        onClick={dropdown_toggle}
        alt=""
        className="nav-dropdown"
      />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop{" "}
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/electronic">
            Electronics
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/kitchen">
            Kitchen Products
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/lighting">
            Lightings
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart} alt="cart" className="cart-image" />
        </Link>
        <div className="nav-bar-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

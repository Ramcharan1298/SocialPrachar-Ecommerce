import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {BiCartAdd} from "react-icons/bi"

const Navbar = () => {
  const state = useSelector((state) => state.cart);

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div className="shop-hub">
            <a class="navbar-brand" href="#">
              <img
                src={require("./Images/img-7.jpg")}
                alt="Logo"
                width="40px"
                height="40px"
                className="d-inline-block align-text-top"
              />
              &nbsp;
              <Link to="/">Shop-Hub</Link>{" "}
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2">
              <li className="nav-items ms-2">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-items ms-2">
                <Link to="/Products">Products</Link>
              </li>
              <li className="nav-items ms-2">About Us</li>
              <li className="nav-items ms-2">Contact</li>
            </ul>
            <div className="log-buttons">
              <Link to="/Login">
                <a href="" className="btn">
                  Login
                </a>
              </Link>
              <Link to="/Signup">
                <a href="" className="btn ms-2">
                  Sign-Up
                </a>
              </Link>
              <NavLink to="/Cart" className="btn-cart-icon ms-2">
                <BiCartAdd className="cart-icon"/><span className="products-show">({state.length})</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

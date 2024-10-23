import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {BiCartAdd} from "react-icons/bi"

const Navbar = () => {
  const state = useSelector((state) => state.cart);

  return (
    <div className="fix">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div className="shop-hub">
            <a class="navbar-brand" href="#">
              &nbsp;
              <Link to="/">E-Commerce</Link><br />
            </a>
  
          </div><br />
          
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
                Products
              </li>
              <li className="nav-items ms-2">About Us</li>
              <li className="nav-items ms-2">Contact</li>
            </ul>
            <div className="log-buttons">
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

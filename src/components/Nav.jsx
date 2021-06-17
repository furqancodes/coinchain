import React from "react";

import { Link } from "react-router-dom";

import "../css/Navigation.css";

const Nav = ({ login, setData, setToken }) => {
  const toggle = () => {
    if (!login) {
      return (
        <nav>
          <h2>CoinChain</h2>
          <ul class="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/signup">
              <li>Signup</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      );
    } else {
      const setNull = () => {
        setData("");
        setToken("");
      };

      return (
        <nav>
          <h2>CoinChain</h2>
          <ul class="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/user/profile">
              <li>Profile</li>
            </Link>
            <Link to="/user/logout">
              <li onClick={setNull}>Logout</li>
            </Link>
          </ul>
        </nav>
      );
    }
  };
  return toggle();
};

export default Nav;

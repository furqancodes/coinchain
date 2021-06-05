import React from "react";

import { Link } from "react-router-dom";

import "../css/Navigation.css";

const Nav = () => {
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
};

export default Nav;

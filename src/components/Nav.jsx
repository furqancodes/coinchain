import React from "react";
import { Link } from "react-router-dom";
import UserApi from "./Api/UserApi";

import "../css/Navigation.css";

const Nav = ({ login, setData, setToken, setWallet, token }) => {
  const toggle = () => {
    if (!login) {
      return (
        // <nav class="navbar navbar-inverse">
        //   <div class="container-fluid">
        //     <div class="navbar-header">
        //       <p class="navbar-brand">CoinChain</p>
        //     </div>
        //     <ul class="nav navbar-nav">
        //       <Link to="/">
        //         <li class="active">Home</li>
        //       </Link>
        //       <Link to="/about">
        //         <li>About</li>
        //       </Link>
        //     </ul>
        //     <ul class="nav navbar-nav navbar-right">
        //       <Link to="/signup">
        //         <li>
        //           <span class="glyphicon glyphicon-user"></span> Sign Up
        //         </li>
        //       </Link>
        //       <Link to="/login">
        //         <li>
        //           <span class="glyphicon glyphicon-log-in"></span> Login
        //         </li>
        //       </Link>
        //     </ul>
        //   </div>
        // </nav>
        <nav class="ui inverted menu">
          <div className="logo">
            <h2>CoinChain</h2>
          </div>
          <ul class="nav-links">
            <Link to="/" class="item">
              <li>Home</li>
            </Link>
            <div class="right menu">
              <Link to="/signup" class="item">
                <li>Signup</li>
              </Link>
              <Link to="/login" class="item">
                <li>Login</li>
              </Link>
            </div>
          </ul>
        </nav>
      );
    } else {
      const setNull = () => {
        try {
          setWallet("");
          setData("");
          setToken("");
          UserApi.post(
            "/logoutAll",
            {},
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      };

      return (
        // <nav class="navbar navbar-inverse">
        //   <div class="container-fluid">
        //     <div class="navbar-header">
        //       <p class="navbar-brand">CoinChain</p>
        //     </div>
        //     <ul class="nav navbar-nav">
        //       <Link to="/">
        //         <li class="active">Home</li>
        //       </Link>
        //       <Link to="/about">
        //         <li>About</li>
        //       </Link>
        //     </ul>
        //     <ul class="nav navbar-nav navbar-right">
        //       <Link to="/user/profile">
        //         <li>
        //           <span class="glyphicon glyphicon-user"></span> Profile
        //         </li>
        //       </Link>
        //       <Link to="/user/logout">
        //         <li onClick={setNull}>
        //           <span class="glyphicon glyphicon-log-out"></span> Logout
        //         </li>
        //       </Link>
        //     </ul>
        //   </div>
        // </nav>
        <nav class="ui inverted menu">
          <div className="logo">
            <h2>CoinChain</h2>
          </div>
          <ul class="nav-links">
            <Link to="/" class="item">
              <li>Home</li>
            </Link>
            <Link to="/beneficiary" class="item">
              <li>Beneficiary</li>
            </Link>
            <Link to="/transactions" class="item">
              <li>Transactions</li>
            </Link>
            <div class="right menu">
              <Link to="/user/profile" class="item">
                <li>Profile</li>
              </Link>
              <Link to="/" class="item">
                <li onClick={setNull}>Logout</li>
              </Link>
            </div>
          </ul>
        </nav>
      );
    }
  };
  return toggle();
};

export default Nav;

import React, { useState } from "react";
import { APP_URL } from "../config";

import "../css/Login.css";

const Login = ({ onlogin, view }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    onlogin({ email, password });
  };
  return (
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">Log-in to your account</div>
          </h2>
          <form class="ui large form border-radius" onSubmit={onFormSubmit}>
            <div class="ui stacked secondary segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input
                    value={email}
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" class="ui fluid large black submit button">
                Login
              </button>
            </div>
            {view({ message: "Signed in" })}
            <div class="ui error message"></div>
          </form>

          <div class="ui message">
            New to us? <a href={APP_URL + "/signup"}>signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { APP_URL } from "../config";

import "../css/Login.css";

const Signup = ({ onformSubmit, view, setError }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || age === "" || email === "" || password === "") {
      setError("Please complete form");
    } else {
      setError("");

      onformSubmit({ name, email, age, password });
    }
  };
  return (
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">Create your account</div>
          </h2>
          <form onSubmit={onFormSubmit} class="ui large form border-radius">
            <div class="ui stacked secondary segment">
              <h3>Sign Up</h3>
              <div class="required field">
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div class="required field">
                <input
                  type="text"
                  value={age}
                  placeholder="Age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>

              <div class="required field">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div class="required field">
                <input
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button type="submit" class="ui fluid large black submit button">
                Sign Up
              </button>
            </div>
            {view({ message: "account is created" })}
            <div class="ui error message"></div>
          </form>
          <div class="ui message">
            Already registered <a href={`${APP_URL}/login`}>sign in?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

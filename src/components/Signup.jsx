import React, { useState } from "react";

import "../css/Login.css";

const Signup = ({ onformSubmit, view }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    onformSubmit({ name, email, age, password });
  };
  return (
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui image header">
            <div class="content">Log-in to your account</div>
          </h2>
        </div>
      </div>

      <form onSubmit={onFormSubmit} class="ui large form">
        <div class="ui stacked secondary  segment">
          <h3>Sign Up</h3>
          <div class="required field">
            <label>Name</label>
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
            <label>Age</label>
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
            <label>Email address</label>
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
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" class="ui fluid large teal submit button">
            Sign Up
          </button>
          <p>
            Already registered{" "}
            <a href="http://localhost:3000/users/login">sign in?</a>
          </p>
        </div>
      </form>
      {view({ message: "account is created" })}
    </div>
  );
};

export default Signup;

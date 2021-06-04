import React, { useState } from "react";

const Signup = ({ onformSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    onformSubmit({ name, email, age, password });
  };
  return (
    <form onSubmit={onFormSubmit} class="ui form">
      <h3>Sign Up</h3>

      <div class="required four wide field">
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

      <div class="required four wide field">
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

      <div class="required four wide field">
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

      <div class="required four wide field">
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

      <button type="submit" class="ui primary button">
        Sign Up
      </button>
      <p>
        Already registered <a href="goog">sign in?</a>
      </p>
    </form>
  );
};

export default Signup;

import React, { useState } from "react";

import UserApi from "./Api/UserApi";
import Signup from "./Signup";

const App = () => {
  const [data, setData] = useState("");
  const [Error, setError] = useState("");
  const onformSubmit = async ({ name, age, email, password }) => {
    try {
      const response = await UserApi.post("/signup", {
        name,
        email,
        age,
        password,
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      if (error.response.data.code === 11000) {
        setError("Email Already exists");
        setData("");
      } else {
        console.log(error.response);
        setError(error.response.data.message);
      }
    }
  };
  const userData = () => {
    if (data) {
      return (
        <div class="ui positive message four wide">
          <i class="close icon"></i>
          <div class="header">Successful</div>
          <p>Congratulation {data.user.name} account is created</p>
        </div>
      );
    } else if (Error && !data) {
      return (
        <div class="ui negative message four wide">
          <i class="close icon"></i>
          <div class="header">ERROR</div>
          <p>{Error}</p>
        </div>
      );
    }
  };
  return (
    <div className="ui container">
      <Signup onformSubmit={onformSubmit} />
      {userData()}
    </div>
  );
};

export default App;

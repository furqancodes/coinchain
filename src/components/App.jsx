import React, { useState } from "react";

import UserApi from "./Api/UserApi";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
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
      setToken(response.data.token);
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
  const onlogin = async ({ email, password }) => {
    try {
      const response = await UserApi.post("/login", {
        email,
        password,
      });
      console.log(response);
      setData(response.data);
      setToken(response.data.token);
    } catch (error) {
      // if (error.response.data.code === 11000) {
      //   setError("Email Already exists");
      //   setData("");
      // } else {
      setError("some error occured");
      // }
    }
  };
  const userData = ({ message }) => {
    if (data) {
      return (
        <div class="ui positive message four wide">
          <i class="close icon"></i>
          <div class="header">Successful</div>
          <p>
            Congratulation {data.user.name} {message}
          </p>
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
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login">
            <Login onlogin={onlogin} view={userData} />
          </Route>
          <Route path="/signup">
            <Signup onformSubmit={onformSubmit} view={userData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

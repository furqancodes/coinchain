import React from "react";

import UserApi from "./Api/UserApi";
import Signup from "./Signup";

const App = () => {
  const onformSubmit = async ({ name, age, email, password }) => {
    const response = await UserApi.post("/signup", {
      body: {
        name,
        email,
        age,
        password,
      },
    });
    console.log(response);
  };
  return (
    <div>
      <Signup onformSubmit={onformSubmit} />
    </div>
  );
};

export default App;

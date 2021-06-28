import React, { useState } from "react";

import UserApi from "./Api/UserApi";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Profile from "./User/Profile";
import Beneficiary from "./User/Beneficiary";
import Transactions from "./User/Transactions";
import CreateTransaction from "./User/CreateTransaction";
import Footer from "./Footer";
// import Logout from "./Logout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const [wallet, setWallet] = useState("");
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [transactionData, setTransactionData] = useState({});
  const [allUsers, setAllUsers] = useState("");

  // console.log(error);
  const onformSubmit = async ({ name, age, email, password }) => {
    try {
      const response = await UserApi.post("/signup", {
        name,
        email,
        age,
        password,
      });
      setData(response.data.user);
      console.log(response);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.Error);
      setData("");
      // if (error.response.data) {
      //   setError("Email Already exists");
      //   setData("");
      // } else {
      //   console.log(error.response);
      //   setError(error.response.data.message);
      //   setData("");
      // }
    }
  };
  const onlogin = async ({ email, password }) => {
    try {
      const response = await UserApi.post("/login", {
        email,
        password,
      });
      // console.log("LOGGED IN");
      // console.log(response.data);
      setData(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      // if (error.response.data.code === 11000) {
      //   setError("Email Already exists");
      //   setData("");
      // } else {
      setError(error.response.data.Error);
      // }
    }
  };
  const getUsers = async () => {
    try {
      const response = await UserApi.get("/all", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(response.data);

      // etTimeout(() => {
      //   console.log(allUsers);
      // }, 1000);s
      //
    } catch (error) {
      console.log(error.response);
    }
  };
  const userProfile = async () => {
    try {
      const response = await UserApi.get("/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setWallet(response.data.wallet);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const addBeneficiary = async (inputValue, token) => {
    try {
      const response = await UserApi.patch(
        "/me",
        {
          beneficiary: inputValue,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      return response;
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }

    // setData(response.data)
  };
  const deleteBeneficiary = async (beneficiaryEmail) => {
    // console.log(token);
    const response = await UserApi.delete("/beneficiary/:", {
      params: {
        beneficiary: beneficiaryEmail,
      },
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response;
  };

  const getTransactions = async () => {
    // console.log(token);
    try {
      const response = await UserApi.get("/transactions", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.response);
    }

    // setTransactions(response.data.transactionsList);
  };
  const sendAmount = async ({ amount, senderEmail, recipientEmail }) => {
    // console.log(token);
    const response = await UserApi.post(
      "/transfer",
      { amount, senderEmail, recipientEmail },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  };
  const activate = async (userEmail) => {
    try {
      const response = await UserApi.patch(
        "/admin/" + userEmail,
        { activated: true },
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
  const userData = (message) => {
    if (data && message) {
      return (
        <div class="ui positive message four wide">
          <i class="close icon"></i>
          <div class="header">Successful</div>
          <p>
            Congratulation {data.name} {message}
          </p>
        </div>
      );
    } else if (error && !message) {
      return (
        <div class="ui negative message four wide">
          <i class="close icon"></i>
          <div class="header">ERROR</div>
          <p>{error}</p>
        </div>
      );
    }
  };
  return (
    <Router>
      <div>
        <Nav
          login={token ? true : false}
          setData={setData}
          setError={setError}
          setToken={setToken}
          setWallet={setWallet}
          token={token}
          data={data}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login">
            {token ? (
              <Redirect to="/user/profile" />
            ) : (
              <Login
                error={error}
                setError={setError}
                onlogin={onlogin}
                view={userData}
              />
            )}
          </Route>
          <Route path="/signup">
            <Signup
              onformSubmit={onformSubmit}
              view={userData}
              setError={setError}
              error={error}
            />
          </Route>
          <Route path="/user/profile">
            {data === "" ? (
              <Redirect to="/" />
            ) : (
              <Profile data={data} userProfile={userProfile} wallet={wallet} />
            )}
          </Route>
          <Route path="/beneficiary">
            {data === "" ? (
              <Redirect to="/" />
            ) : (
              <Beneficiary
                error={error}
                data={data}
                token={token}
                setData={setData}
                userData={userData}
                allUsers={allUsers}
                setAllUsers={setAllUsers}
                addBeneficiary={addBeneficiary}
                deleteBeneficiary={deleteBeneficiary}
                setTransactionData={setTransactionData}
                userProfile={userProfile}
                getUsers={getUsers}
                activate={activate}
              />
            )}
          </Route>
          <Route path="/transactions">
            <Transactions getTransactions={getTransactions} wallet={wallet} />
          </Route>
          <Route path="/createtransaction">
            <CreateTransaction
              data={data}
              sendAmount={sendAmount}
              transactionData={transactionData}
              wallet={wallet}
              setTransactionData={setTransactionData}
            />
          </Route>
          {/* {console.log(transactionData)} */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

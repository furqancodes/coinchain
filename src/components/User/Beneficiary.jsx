import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Signup.css";

const Beneficiary = ({
  data,
  token,
  setData,
  getUsers,
  allUsers,
  userProfile,
  addBeneficiary,
  deleteBeneficiary,
  setTransactionData,
}) => {
  useEffect(() => {
    // const getAllUsers = async () => {
    //   const response = await
    // getUsers();
    // console.log(response);
    // setAllUsers(response);
    // };
    if (data.userType === "Admin") {
      getUsers();
      console.log(allUsers);
    }
  }, []);
  const onSearch = async (e) => {
    e.preventDefault();
  };
  // console.log(data);
  const [inputValue, setInputValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addBeneficiary(inputValue, token);
      setData(response.data);
      // console.log("add beneficiary");
      // console.log(response);
      if (response.data) {
        setData(response.data);
      }
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (beneficiary) => {
    const response = await deleteBeneficiary(beneficiary);
    if (response.data) {
      setData(response.data);
    }
  };
  const renderBeneficiary = () => {
    if (data.beneficiaries.length > 0) {
      const lists = data.beneficiaries.map((block) => {
        return (
          <div class="item">
            <Link to="/createtransaction">
              <button
                onClick={() => {
                  setTransactionData({
                    senderEmail: data.email,
                    recipientEmail: block.beneficiary,
                  });
                  userProfile();
                }}
                class="ui right floated blue small button"
              >
                Transact
              </button>
            </Link>
            <button
              onClick={() => onDelete(block.beneficiary)}
              class="ui right floated red small button"
            >
              Delete
            </button>
            <div class="content w5">
              <p class="p">{block.beneficiary}</p>
            </div>
          </div>
        );
      });
      return lists;
    } else {
      return <div>no beneficiaries</div>;
    }
  };
  const renderUsers = () => {
    if (allUsers.length > 0) {
      const lists = allUsers.map((block) => {
        console.log("activated");
        console.log(block.activated);
        return (
          <div class="item">
            <Link to="/createtransaction">
              <button
                onClick={() => {
                  setTransactionData({
                    senderEmail: data.email,
                    recipientEmail: block.email,
                  });
                  userProfile();
                }}
                class="ui right floated blue small button"
              >
                Transact
              </button>
            </Link>
            <button
              type="submit"
              class={
                block.activated
                  ? "ui right floated teal ui disabled button"
                  : "ui right floated teal small button"
              }
            >
              Activate
            </button>

            <div class="content w5">
              <p class="p">{block.email}</p>
            </div>
          </div>
        );
      });
      return lists;
    }
  };
  const renderType = () => {
    if (data.userType === "User") {
      return (
        <div class="center">
          <form class="addform" onSubmit={onSubmit}>
            <div className="field wf">
              <input
                class="addinput"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                value={inputValue}
                type="email"
                placeholder="Beneficiary Email"
              ></input>
              <button class=" ui right floated blue small button ">
                Add Beneficiary
              </button>
            </div>
          </form>
          <div class="ui celled list width-50">{renderBeneficiary()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div class="center">
            <form class="addform" onSubmit={onSearch}>
              <div className="field wf">
                <input
                  class="addinput"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  value={inputValue}
                  type="email"
                  placeholder="Search User"
                ></input>
                <button class=" ui right floated blue small button ">
                  Search User
                </button>
              </div>
            </form>
            <div class="ui celled list width-50">{renderUsers()}</div>
          </div>
        </div>
      );
    }
  };
  return <div> {renderType()}</div>;
};

export default Beneficiary;

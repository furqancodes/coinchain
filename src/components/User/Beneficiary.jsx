import React, { useState } from "react";
import "../../css/Signup.css";

const Beneficiary = ({ data, token, setData, addBeneficiary }) => {
  // console.log(data);
  const [inputValue, setInputValue] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await addBeneficiary(inputValue, token);
    // setData(response.data)
    console.log("add beneficiary");
    console.log(response);
    if (response.data) {
      setData(response.data);
    }
    setInputValue("");
  };
  const renderBeneficiary = () => {
    if (data.beneficiaries.length > 0) {
      console.log();
      const lists = data.beneficiaries.map((block) => {
        return (
          <div class="item">
            <div class="content w5">
              <p class="p">{block.beneficiary}</p>
            </div>
            <button class="ui right floated button">Right Floated</button>
          </div>
        );
      });
      return lists;
    } else {
      return <div>no beneficiaries</div>;
    }
  };
  return (
    <div class="center">
      <div class="ui celled list width-50">{renderBeneficiary()}</div>
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
    </div>
  );
};

export default Beneficiary;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateTransaction = ({
  setTransactionData,
  sendAmount,
  transactionData,
  wallet,
  data,
}) => {
  const { senderEmail, recipientEmail } = transactionData;
  // console.log("transaction data");
  // console.log(transactionData);
  const [responseCode, setResponseCode] = useState();

  const [value, setValue] = useState(0);
  const onAmountSubmit = async (e) => {
    e.preventDefault();
    if (value > 0) {
      const response = await sendAmount({
        amount: value,
        senderEmail,
        recipientEmail,
      });
      setResponseCode(response.status);
      console.log(response);
    }
  };
  const checkAmount = () => {
    if (data.userType === "User") {
      if (value > wallet.balance || !value) {
        return (
          <div>
            <h2>Amount is Invalid</h2>
            Please Enter Valid Amount
          </div>
        );
      }
    }
  };
  const Input = () => {
    if (data.userType === "User") {
      return (
        <input
          type="number"
          name="value"
          value={value}
          min="0"
          max={wallet.balance}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      );
    } else {
      return (
        <input
          type="number"
          name="value"
          value={value}
          min="0"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      );
    }
  };
  const conditionalRendering = () => {
    console.log(value);
    if (responseCode === 200) {
      return (
        <div class="h ui container top-10">
          <div class="h ui middle aligned center aligned grid">
            <div
              class="ui card h"
              style={{
                width: "420px",
              }}
            >
              <div class="content">
                <header class="header " style={{ color: "teal" }}>
                  Transaction Successful
                </header>
                <div class="description">Amount: Rs{value}</div>
                <div class="description">Receiver: {recipientEmail}</div>
              </div>
              <div class="extra content">
                Remaining Balance: {wallet.balance - value}
              </div>
              <div>
                <Link to="/beneficiary">
                  <button
                    class="ui fluid large black submit button"
                    onClick={() => {
                      setTransactionData({});
                      setValue(0);
                      setResponseCode();
                    }}
                  >
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="ui container">
          <div class="ui middle aligned center aligned grid">
            <div class="column">
              <form
                onSubmit={onAmountSubmit}
                class="ui large form border-radius"
              >
                <div class="ui stacked secondary segment">
                  <h3>Transaction</h3>
                  <div class="required field"></div>
                  <h3>Recipient: {recipientEmail}</h3>
                  <h3>Remaining Balance will be {wallet.balance - value}</h3>
                  {Input()}
                  <button
                    type="submit"
                    class={
                      (data.userType === "User" && value > wallet.balance) ||
                      !value ||
                      value < 0 ||
                      (data.userType === "User" && wallet.balance === 0)
                        ? "ui disabled button"
                        : "ui fluid large black submit button"
                    }
                  >
                    Create Transaction
                  </button>
                  {checkAmount()}
                </div>
                {/* {view({ message: "" })} */}
                <div class="ui error message"></div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div style={{ marginTop: "84px", marginBottom: "84px" }}>
      {conditionalRendering()}
    </div>
  );
};

export default CreateTransaction;

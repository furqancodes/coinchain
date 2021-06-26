import React, { useState } from "react";

const CreateTransaction = ({ sendAmount, transctionData }) => {
  const { senderEmail, recipientEmail } = transctionData;
  const [value, setValue] = useState(0);
  const onAmountSubmit = async (e) => {
    e.preventDefault();
    const response = await sendAmount({
      amount: value,
      senderEmail,
      recipientEmail,
    });
    console.log(response);
  };
  return (
    <div class="ui container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <form onSubmit={onAmountSubmit} class="ui large form border-radius">
            <div class="ui stacked secondary segment">
              <h3>Transaction</h3>
              <div class="required field">
                <input
                  type="number"
                  name="value"
                  value={value}
                  min="0"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
              <button type="submit" class="ui fluid large black submit button">
                Create Transaction
              </button>
            </div>
            {/* {view({ message: "" })} */}
            <div class="ui error message"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;

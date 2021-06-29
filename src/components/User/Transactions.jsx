import React, { useEffect, useState } from "react";

const Transactions = ({ getTransactions, wallet }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const responseFunc = async () => {
      try {
        const response = await getTransactions();
        // console.log(response.data);
        setTransactions(response.data.transactionsList);
      } catch (error) {
        console.log(error);
      }

      // setTimeout(() => {
      //   setTransactions(response.data.transactionsList);
      // }, 1000);
      // console.log(transactions);
    };
    responseFunc();
    // setTransactions(response.data.transactionsList);
  }, []);
  const conditionalRendering = () => {
    if (transactions.length > 0) {
      return transactions
        .slice(0)
        .reverse()
        .map((transaction) => {
          const fromto =
            transaction.type === "Debit"
              ? transaction.receiver
              : transaction.sender;
          // console.log(transaction);
          return (
            <tr class={transaction.type === "Debit" ? "negative" : "positive"}>
              <td>{fromto}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.time}</td>
              <td>{transaction.date}</td>
            </tr>
          );
        });
    } else {
      return (
        <tr class="negative">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  };
  return (
    <div
      class="ui container"
      style={{
        width: "57%",
        paddingTop: "35px",
        marginTop: "84px",
        marginBottom: "120px",
      }}
    >
      {/* <button
        class="ui right floated blue small button"
        onclick={() => {
          window.print();
        }}
      >
        Print
      </button> */}
      <div class="ui middle aligned center aligned grid">
        <div style={{ marginBottom: "165px" }}>
          <table class="ui celled table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{conditionalRendering()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

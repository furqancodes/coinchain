import React, { useEffect, useState } from "react";

const Transactions = ({ getTransactions, wallet }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const responseFunc = async () => {
      const response = await getTransactions();
      // console.log(response.data);
      setTransactions(response.data.transactionsList);
      // setTimeout(() => {
      //   setTransactions(response.data.transactionsList);
      // }, 1000);
      // console.log(transactions);
    };
    responseFunc();
    // setTransactions(response.data.transactionsList);
  }, []);

  const conditionalRendering = () => {
    if (transactions) {
      return transactions.map((transaction) => {
        // console.log(transaction);
        return (
          <div>
            <div>{transaction.sender}</div>
            <div>{transaction.receiver}</div>
            <div>{transaction.amount}</div>
            <div>{transaction.date}</div>
            <div>{transaction.time}</div>
            <div>------------------------</div>
          </div>
        );
      });
    } else {
      return <div>no transactions</div>;
    }
  };
  return <div>{conditionalRendering()}</div>;
};

export default Transactions;

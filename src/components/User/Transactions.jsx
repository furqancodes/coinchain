import React, { useEffect, useState } from "react";

const Transactions = ({ getTransactions, wallet }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const responseFunc = async () => {
      const response = await getTransactions();
      setTransactions(response.data.transactionsList);
    };
    responseFunc();
    // setTransactions(response.data.transactionsList);
  }, []);
  console.log(transactions);
  const conditionalRendering = () => {
    if (transactions) {
      transactions.forEach((transaction) => {
        console.log(transaction);
        return (
          <div>
            <div>{transaction.sender}</div>
            <div>{transaction.receiver}</div>
            <div>{transaction.amount}</div>
          </div>
        );
      });
    }
    return <div>no transactions</div>;
  };
  return <div>{conditionalRendering()}</div>;
};

export default Transactions;

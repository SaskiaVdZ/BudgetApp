import React, { useState } from "react";
import Illustration from "./Images/Illustration.gif";
import "./App.css";
import { Typography, Container } from "@mui/material";
import InputForm from "./Components/InputForm";
import Listing from "./Components/Listing";
import Summary from "./Components/Summary";

function App() {
  const [transactions, setTransactions] = useState([]);
  //Creates a state variable called 'transactions' to store a list of tansactions, an empty array to start of with. The 'useState' hook is used to manage this state.

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  //Function to add a new transaction. Takes a new transaction object as input. Updates the transactions state using a spread operator (...) to append the new transaction to the existing list.

  const handleDeleteTransaction = (transactionToDelete) => {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction !== transactionToDelete
    );
    setTransactions(filteredTransactions);
  };
  // Takes a transaction object to be deleted as input. Creates a new array of transactions by filtering out the transaction to be deleted (comparing it strictly). Updates the transactions state with the filtered array.

  return (
    <Container align="center" overflow="hidden" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" color="primary">
        Budget Meditation
      </Typography>
      <img
        src={Illustration}
        alt="Woman meditating and floating above the ground with coins around her "
      ></img>

      <Typography variant="subtitle1" fontSize={10} sx={{ mt: 3, mb: 1 }}>
        Illustration: Dazzle Line by Anna Żołnierowicz
      </Typography>
      <InputForm addTransaction={addTransaction} />
      <Listing
        transactions={transactions}
        deleteTransaction={handleDeleteTransaction}
      />
      <Summary transactions={transactions} />
      <Typography textAlign="center" color="primary" variant="body2">
        Made with <i className="fa-solid fa-heart"></i> in React and Material UI
        by Saskia van der Zanden
      </Typography>
    </Container>
  );
}

export default App;

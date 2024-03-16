import React, { useState } from 'react';
import Illustration from "./Images/Illustration.gif";
import './App.css';
import { Typography, Container, Box } from '@mui/material';
import InputForm from "./Components/InputForm"
import Listing from "./Components/Listing"
import Summary from "./Components/Summary"


function App() {
//State to hold the transactions
  const [transactions, setTransactions]= useState([]);
//Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  
  const handleDeleteTransaction = (transactionToDelete) => {
    const filteredTransactions = transactions.filter((transaction) => transaction !== transactionToDelete);
    setTransactions(filteredTransactions);
  };
 

  return (
    <Container align="center" overflow="hidden" sx={{ mt: 6, mb: 6 }}>
    <Typography variant="h3" color="#0a0205">Budget Meditation</Typography>
    <img src={ Illustration } alt="Woman meditating and floating above the ground with coins around her "></img>
   
   <InputForm addTransaction={addTransaction}/>
   <Listing transactions={transactions} deleteTransaction={handleDeleteTransaction}/>
   <Summary transactions={transactions} />
   <Typography variant="subtitle1" fontSize={10} sx={{ mt: 3, mb: 1 }}>Illustration: Dazzle Line by Anna Żołnierowicz</Typography>
   </Container>
  );
}

export default App;

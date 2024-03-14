import React, { useState } from 'react';
import Illustration from "./Images/Illustration.gif";
import './App.css';
import { Typography, Container } from '@mui/material';
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

  return (
    <Container align="center" overflow="hidden" sx={{ mt: 6, mb: 6 }}>
    <Typography variant="h3" >Budget Meditation</Typography>
    <img src={ Illustration }></img>
   <Typography variant="subtitle1" fontSize={10}>Illustration: Dazzle Line by Anna Żołnierowicz</Typography>
   <InputForm addTransaction={addTransaction}/>
   <Listing transactions={transactions} />
   <Summary transactions={transactions} />
   </Container>
  );
}

export default App;

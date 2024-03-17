import React, { useState } from 'react';
import Illustration from "./Images/Illustration.gif";
import Favicon from "./Images/Favicon.gif";
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
  
  const handleDeleteTransaction = (transactionToDelete) => {
    const filteredTransactions = transactions.filter((transaction) => transaction !== transactionToDelete);
    setTransactions(filteredTransactions);
  };
 

  return (
    <Container align="center" overflow="hidden" sx={{ mt: 6, mb: 6 }}>
       
    <Typography variant="h3" color="primary">Budget Meditation</Typography>
    <img src={ Illustration } alt="Woman meditating and floating above the ground with coins around her "></img>
    
    <Typography variant="subtitle1" fontSize={10} sx={{ mt: 3, mb: 1 }}>Illustration: Dazzle Line by Anna Żołnierowicz</Typography>
   <InputForm addTransaction={addTransaction}/>
   <Listing transactions={transactions} deleteTransaction={handleDeleteTransaction}/>
   <Summary transactions={transactions} />
   <Typography textAlign="center" color="primary" variant="body2">
          Made with <i className="fa-solid fa-heart"></i> in React and Material UI by Saskia van der Zanden</Typography>
          
   </Container>
  );
}

export default App;

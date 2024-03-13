import React, { useState } from 'react';
import Illustration from "./Images/Illustration.gif";
import './App.css';
import { Typography, Container } from '@mui/material';
import InputForm from "./Components/InputForm"


function App() {
  return (
    <Container align="center" overflow="hidden" sx={{ mt: 6, mb: 6 }}>
    <Typography variant="h3" >Budget Meditation</Typography>
    <img src={ Illustration }></img>
   <Typography variant="subtitle1">Illustration: Dazzle Line by Anna Żołnierowicz</Typography>
   <InputForm/>
   </Container>
  );
}

export default App;

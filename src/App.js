import React, { useState } from 'react';
import Illustration from "./Images/Illustration.gif";
import './App.css';
import { Typography, Container } from '@mui/material';



function App() {
  return (
    <Container>
    <Typography variant="h3" >Budget Meditation</Typography>
    <img src={ Illustration }></img>
   <Typography variant="subtitle1">Illustration: Dazzle Line by Anna Żołnierowicz</Typography>
   </Container>
  );
}

export default App;

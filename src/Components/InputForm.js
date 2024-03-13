//Adding transactions, here the user can input their transactions and specify the description, amount and type: income or expense

import React, { useState } from "react";
import {
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField
} from "@mui/material";

function InputForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription("");
    setAmount(0);
  };

  return (
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          required
        ></TextField>
        <TextField
          variant="filled"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          required
        ></TextField>
        <RadioGroup
          value={type}
          onChange={(e) => setType(e.target.value)}
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="Expense"
            control={<Radio />}
            label="Expense"
          />
        </RadioGroup>
        <Button type="submit" variant="outlined">Add</Button>
      </form>
    </Grid>
  );
}

export default InputForm;

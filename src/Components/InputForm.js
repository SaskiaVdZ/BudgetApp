//Adding transactions, here the user can input their transactions and specify the description, amount and type: income or expense

import React, { useState } from "react";
import {
  Grid,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function InputForm({ addTransaction }) {
  //Defines the component that takes a prop named addTransaction as a function
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  // The component manages three state variables using useState:
  // description (string): stores the user-entered transaction description
  // amount (number): stores the user-entered transaction amount
  // type (string): stores the selected transaction type, income or expense

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription("");
    setAmount(0);
  };
  // this function handles form submission
  // it takes the event (e) as an argument to prevent default form behaviour (full page reload)
  // calls the addTransaction prop (passed from the parent component) and provides a new transaction object with current state values: description, amount (converted to a number using parseFloat), type
  // resets the form by setting description and amount state back to empty string and 0
  // when submitted it calls the function addTranaction to add the new transaction to the overall transactions list

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
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
          sx={{ mt: 2, mb: 2 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="expense"
            control={<Radio />}
            label="Expense"
          />

          <Button type="submit" variant="contained" sx={{ mt: 1, mb: 1 }}>
            Add
            <AddIcon />
          </Button>
        </RadioGroup>
      </form>
    </Grid>
  );
}

export default InputForm;

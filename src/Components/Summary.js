import React from "react";
import { Grid, ListItem, ListItemText, List } from "@mui/material";

function Summary({ transactions }) {
  const income = transactions
    ?.filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  // add questionmark to check if there are any transactions otherwise I get an error (called optional chaining?)
  // filters the transaction entries with type 'income'
  // two reduce functions
  // reduces the filtered array, iterating and adding each transaction amount to an accumulator (acc) starts the accumulator with an initial value of 0

  const expenses = transactions
    ?.filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  // same but for expenses
  const balance = income - expenses;

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="baseline"
        alignItems="stretch"
        sx={{ maxWidth: "md" }}
      >
        <Grid item xs={12} md={6} mb={2}>
          <List
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <ListItem
              sx={{
                bgcolor: "#f4f1eb",
                borderRadius: "10px",
                maxWidth: "md",
                alignItems: "flex-start",
              }}
            >
              <ListItemText>Total income: {income},- </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                bgcolor: "#f4f1eb",
                borderRadius: "10px",
                maxWidth: "md",
                alignItems: "flex-start",
              }}
            >
              <ListItemText>Total expenses: {expenses},- </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                bgcolor: "#ebeef4",
                borderRadius: "10px",
                maxWidth: "md",
                alignItems: "flex-start",
              }}
            >
              <ListItemText>Balance: {balance},- </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

export default Summary;

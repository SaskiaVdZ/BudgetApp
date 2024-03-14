import React from 'react';
import { Typography, Grid, ListItem, ListItemIcon, ListItemText, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Listing({ transactions }) {
 
   

    return (
        <>
         <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            List of transactions
          </Typography>
            <List>
            {transactions?.map((transaction, index) => (
               //the question mark checks if there are transactions/input before it maps
                <ListItem >
                  <ListItemIcon>
                  <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText key={index}>
                  {transaction.description}: {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
                </ListItemText>
                </ListItem>
              ))}
            </List>
        </Grid>
        </Grid>
        </>

        
    );
}

  
  
  export default Listing;
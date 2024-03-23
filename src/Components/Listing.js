import React from 'react';
import { Typography, Grid, ListItem, ListItemText, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Favicon from "../Images/Favicon.gif";

function Listing({ transactions, deleteTransaction }) {
 
   

    return (
        <>
   <Grid container
    direction="column"
    justifyContent="center"
    alignItems="stretch">
        <Grid item xs={12} md={6}>
        
          <Typography sx={{ mt: 1, mb: 2 }} variant="h6" component="div" color="primary">
            Income & expenses
          </Typography>
          <img className="calc" src={ Favicon } width={70} alt="an illustration of a calculator"/>
            <List>
            {transactions?.map((transaction, index) => (
               //the question mark checks if there are transactions/input before it maps
                <ListItem key={index} sx={{bgcolor: '#ebeef4', borderRadius: '10px', maxWidth: 'md'}}>
   
                  <ListItemText>{transaction.description}: {transaction.type === 'income' ? '+' : '-'} {transaction.amount} ,-
                </ListItemText> 
                <DeleteIcon color="action" 
                            fontSize="small"
                            sx={{p:1}}
                            onClick={() => deleteTransaction(transaction)}/>
                </ListItem>
              ))}
            </List>
            <Divider />
        </Grid>
        </Grid>
        </>

        
    );
}

  
  
  export default Listing;
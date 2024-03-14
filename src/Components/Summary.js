import React from 'react';

function Summary({ transactions }) {
    
const income= transactions?.filter(transaction => transaction.type === 'income').reduce((acc, transaction) => acc + transaction.amount, 0);
//add questionmark to check if there are any transactions otherwise I get an error


const expenses= transactions?.filter(transaction => transaction.type === 'expense').reduce((acc, transaction) => acc + transaction.amount, 0);

const balance = income - expenses;

    
      return (
        <div>
            <p>Total income: { income },- </p>
            <p>Total expenses: { expenses },- </p>
            <p>Balance: { balance },- </p>
        </div>
      
      );
    
    }
    
    export default Summary;
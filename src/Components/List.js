import React from 'react';

function List({ transactions }) {
 
   

    return (
        <ul> 
            {transactions?.map((transaction, index) => (
                 //the question mark checks if there are transactions/input before it maps
            <li key={index}>
                {transaction.description}: {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
            </li>
               
                ))}
        </ul>
    );
}

  
  
  export default List;
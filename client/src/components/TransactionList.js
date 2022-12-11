import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transactions';
import { useContext,useEffect } from 'react';
export const TransactionList = () => {
    const { transactions ,getTransactions} = useContext(GlobalContext);
  
    useEffect(()=>{
      getTransactions();
      //eslint-disable next line  
    },[]);
    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
      </>
    )
  }

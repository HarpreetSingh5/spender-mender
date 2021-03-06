import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    console.log(transactions);


    return (
        <div className="z-depth-2" >
            <h3  className="center-align">History</h3>
            <table className="centered responsive-table">
                <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Value (In Rands)</th>
                </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction=>(
                        <Transaction transaction={transaction} key={transaction.id}/>
                    ))}
                        
                </tbody>
            </table>
            <p><br/></p>
            <div className="divider"></div>
        </div>
    )
}

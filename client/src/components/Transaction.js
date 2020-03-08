import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext);
 

    return (
            <tr className={transaction.amount>=0 ? "green-text":"red-text"} key={transaction.id}>
                <td>{transaction.transaction}</td>
                <td>{transaction.amount}</td>
                <td>
                <button onClick={()=> deleteTransaction(transaction.id)} className="btn-small waves-effect waves-light grey" >Remove entry
                </button></td>
            </tr>
    )
}

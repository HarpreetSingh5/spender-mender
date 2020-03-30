import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const prices = transactions.map(transaction=> transaction.amount);
    const balance = prices.reduce((total,value)=>(total = total+value),0).toFixed(2);
    // console.log(balance)
    // console.log(prices)

    return (
        <div >
        <h4 className="right-align">Your remaining balance</h4>
        <h2 className="blue-grey-text right-align">R{balance}</h2>
        <div className="divider"></div>
        </div>
    )
}

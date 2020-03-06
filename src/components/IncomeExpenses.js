import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);
    const prices = transactions.map(transaction=>transaction.amount);

    const income = prices.reduce((total,value)=>{
        if(value>0){
            total = total + value 
        }
        else{}
        return total
    },0).toFixed(2); 

    const expenses = prices.reduce((total,value)=>{
        if(value<=0){
            total = total + value 
        }
        else{}
        return total
    },0);
    console.log(income);
    console.log(expenses);
    return (
        <div>
            <div className="collection z-depth-3 pulse">
                <div className='collection-item '>
                    <h4>Income</h4>
                    <p className="light-green-text text-lighten-2">R{income}</p>
                </div>
                <div className='collection-item '>
                    <h4>Total Expenses</h4>
                    <p className="red-text text-darken-2">-R{(expenses*-1).toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    )
}

import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
const [transaction,setTransaction] = useState('');
const [amount, setAmount] = useState();

const { addTransaction } = useContext(GlobalContext);

const onSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
        id: Math.floor(Math.random()*1000000),
        transaction: transaction,
        amount:+amount + 0  //+amount is to turn amount which is a string to int. Input fields always store values as string 
    }
    console.log(newItem);
    addTransaction(newItem);

}

    return (
            <div className="card-panel lighten-5 z-depth-0">
            <h3  className="center-align">Add new transaction</h3>
                <form onSubmit = {onSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="transaction" type="text"  onChange={(e)=>setTransaction(e.target.value)} className="validate"/>
                            <label htmlFor="transaction">Describe transaction here..</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="amount" type="number" onChange={(e)=>setAmount(e.target.value)} />
                            <label htmlFor="amount">Amount</label>
                            <span className="helper-text" data-error="wrong" data-success="right">(Negative : expense, Positive : income)</span>
                        </div>
                    </div>
                    <button className=" right btn waves-effect waves-green grey">Add transaction</button>
                </form>
            </div>

    )
}

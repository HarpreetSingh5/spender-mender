import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
        {id:1, transaction:'Wine', amount: -20},
        {id:2,transaction:'Cheesecake', amount: -15},
        {id:3, transaction: 'Salary', amount: 400},
        {id:4, transaction: 'Petrol', amount: -50},
        {id:5, transaction: 'Tax return', amount: 200}  
    ]
}

export const GlobalContext = createContext(initialState); //creating the context

export const GlobalProvider = ({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){ //actions that make calls to reducer
        dispatch({
            type: 'DELETE_TRANSACTION',  //now the switch case in app reducer determines which action to perform 
            payload: id
        });   //dispatching to reducer

    };

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',  //now the switch case in app reducer determines which action to perform 
            payload: transaction
        });   //dispatching to reducer

    };



    return(<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
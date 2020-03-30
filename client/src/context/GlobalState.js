import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
    transactions: [
        // {id:1, transaction:'Wine', amount: -20},
        // {id:2,transaction:'Cheesecake', amount: -15},
        // {id:3, transaction: 'Salary', amount: 400},
        // {id:4, transaction: 'Petrol', amount: -50},
        // {id:5, transaction: 'Tax return', amount: 200}  
    ],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState); //creating the context

export const GlobalProvider = ({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function deleteTransaction(id){ //actions that make calls to reducer
        try{
            await axios.delete(`/backend/transactions/${id}`); //updating database by removing requested document 

            dispatch({
                type: 'DELETE_TRANSACTION',  //now the switch case in app reducer determines which action to perform 
                payload: id  //updating our local state with current database entry 
            });   //dispatching to reducer

        }catch(err){
            console.log(err)
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }


    };

    async function addTransaction(transaction){
        // dispatch({
        //     type: 'ADD_TRANSACTION',  //now the switch case in app reducer determines which action to perform 
        //     payload: transaction
        // });   //dispatching to reducer

        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      
          try {
            const res = await axios.post('/backend/transactions', transaction, config);
      
            dispatch({
              type: 'ADD_TRANSACTION',
              payload: res.data.data
            });
          } catch (err) {
            dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
            });
          }

    };


    async function getTransactions(){
        try{
            const response = await axios.get('/backend/transactions');
            console.log(response);

            dispatch({
                type:'GET_TRANSACTIONS',
                payload: response.data.data
            })


        }catch(err){
            console.log(err)
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return(<GlobalContext.Provider value = {{
        transactions: state.transactions,
        error:state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
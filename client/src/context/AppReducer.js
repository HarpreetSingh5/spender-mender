

//reducer is how you specify application state changes in response to certain actions to our store

export default (state,action)=>{
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
                loading:false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION': //reducer is just a way to change state and pass it down to component
            return {
                ...state,  //send current state
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)  //we're setting new state to all transactions that dont contain the id
                
            }
        
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error: action.payload
            }

        case 'ADD_TRANSACTION' :
            return{
                ...state,
                transactions: [...state.transactions,action.payload]
            }
        default:
            return state;
    }
}
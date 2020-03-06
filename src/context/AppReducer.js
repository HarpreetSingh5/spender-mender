

//reducer is how you specify application state changes in response to certain actions to our store

export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION': //reducer is just a way to change state and pass it down to component
            return {
                ...state,  //send current state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)  //we're setting new state to all transactions that dont contain the id
                
            }

        case 'ADD_TRANSACTION' :
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
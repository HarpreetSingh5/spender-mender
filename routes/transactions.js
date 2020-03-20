const express = require('express');
const router = express.Router();
const {getTransactions, addTransactions, removeTransactions} = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions); //using .route instead of the individual methods allows us to chain them like this. Both post and get handled by one block of code
//router.get('/',(req,res)=>res.send('henlo from transactions'));

router
    .route('/:id')              //we need the id for delete so we couldnt chain it at the top there 
    .delete(removeTransactions);

module.exports =  router;

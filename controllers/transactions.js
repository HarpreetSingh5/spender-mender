const Transaction = require('../models/Transactions');

exports.getTransactions = async (req,res,next) => { //these are all different methods that will be used on the transactions
    //res.send('GET transactions');
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            success:true,
            count: transactions.length,
            data: transactions
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })

    }
}

exports.addTransactions = async (req,res,next) => { //Mongoose methods return promises so we use async await. 
    //res.send('ADD transactions');
    try{
        const { transaction, amount } = req.body;
        const entry = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            data: entry
        });
    }catch(err){
        if(err.name === "ValidationError"){  //this will come about if the fields specified in our schema arent filled properly
            const messages = Object.values(err.errors).map(val=>val.message);  //We are just searching for the message we defined in the schema to display to user 
            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        else{
            res.status(500).json({
                success: false,
                error: 'Some weird error'
            })
        }
    }
}

exports.removeTransactions = async (req,res,next) => {
    //res.send('DELETE transactions');
    try{
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found '
            });            
        }

        await transaction.remove(); //remove is a function that can be called on the mongo resource itself
        return res.status(200).json({
            success: true,
            data:{}
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            error: 'Some weird error'
        })
    }
}

exports.singleTransaction = async (req,res,next) =>{
    try{
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found '
            });            
        }

        //await transaction.remove(); //remove is a function that can be called on the mongo resource itself
        return res.status(200).json({
            success: true,
            data: transaction
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            error: 'Some weird error'
        })
    }
}
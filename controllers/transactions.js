

exports.getTransactions = (req,res,next) => { //these are all different methods that will be used on the transactions
    res.send('GET transactions');
}

exports.addTransactions = (req,res,next) => {
    res.send('ADD transactions');
}

exports.removeTransactions = (req,res,next) => {
    res.send('DELETE transactions');
}
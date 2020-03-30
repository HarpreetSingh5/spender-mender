const mongoose = require('mongoose');

const TransacitonSchema = new mongoose.Schema({
    transaction: {
        type: String,
        trim:true,
        required:[true, 'Please add some text']
    },
    amount: {
        type: Number,
        required:[true, 'Please add a positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction',TransacitonSchema);
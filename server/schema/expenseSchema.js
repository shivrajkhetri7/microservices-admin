const mongoose = require('mongoose');

const expense = mongoose.Schema({
    transactionId : {
        type: String,
        required: true
    },
    userId :{
        type :String,
        required :true
    },
    expenseType:{
        type :String,
        required :true 
    },
    expenseAmount :{
        type : Number,
        required: true
    },
    createdAt: {
        default: Date.now,
        type: Date,
    },
},{
    timestamps:true 
});

const expenseSchema = mongoose.model("expense", expense);
module.exports = expenseSchema;



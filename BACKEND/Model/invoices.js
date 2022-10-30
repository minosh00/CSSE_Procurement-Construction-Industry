const mongoose = require("mongoose");

const InvoicesSchema = mongoose.Schema({

    InvoicesID:{type:String, required:true},
    OrderID:{type:String , required:true},
    location:{type:String , required:true},
    Material:{type:String },
    qty:{type:String , required:true},
    Amount:{type:String , required:true},

},{
    timestamps:true,
}) 

const Invoicesmodel = mongoose.model('Invoices' , InvoicesSchema)

module.exports = Invoicesmodel



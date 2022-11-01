const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({

    orderID:{type:String, required:true},
    amount:{type:String , required:true},
    paymentMethod:{type:String , required:true},
    phoneNumber:{type:String , default:"not yet transport"}

},{
    timestamps:true,
}) 

const paymentModel = mongoose.model('payment' , PaymentSchema)

module.exports = paymentModel
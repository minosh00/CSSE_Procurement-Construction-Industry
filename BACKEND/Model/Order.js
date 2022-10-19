const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({

    OrderID:{type:String, required:true},
    DeliveryAddress:{type:String , required:true},
    supervisorID:{type:String, required:true},
    QTY:{type:String , required:true},
    Price:{type:String, required:true},
    Description:{type:String, required:true},
    status:{type:String , default:null},
},{
    timestamps:true,
}) 

const Ordermodel = mongoose.model('Order' , OrderSchema)

module.exports = Ordermodel
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({

    OrderID:{type:String, required:true},
    DeliveryAddress:{type:String , required:true},
    Material:{type:String , required:true},
    creator :{type:String},
    Deadline:{type:Date , required:true},
    QTY:{type:Number , required:true},
    Price:{type:Number, required:true},
    Description:{type:String, required:true},
    status:{type:String , default:null},
    note:{type:String , default:null},
},{
    timestamps:true,
}) 

const Ordermodel = mongoose.model('Order' , OrderSchema)

module.exports = Ordermodel



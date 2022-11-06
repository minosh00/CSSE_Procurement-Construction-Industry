const mongoose = require("mongoose");

//Transport Schema
const TransportSchema = mongoose.Schema({
    OrderID: {
        type: String,
        required: true
    },

    TransportID: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    TransportStatus: {
        type: String,
        default: "not yet transport"
    },

    VehicleNumber: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
})

const transportmodel = mongoose.model('transport', TransportSchema)
module.exports = transportmodel
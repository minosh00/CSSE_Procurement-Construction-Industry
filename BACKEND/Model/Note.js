const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    PurchaseID: { type: String, required: true },
    OrderID: { type: String, required: true },
    TransportID: { type: String, required: true },
    Date: { type: String },
    TotalAmount: { type: String, required: true },
}, {
    timestamps: true,
})

const NotesModel = mongoose.model('notes', NoteSchema)
module.exports = NotesModel
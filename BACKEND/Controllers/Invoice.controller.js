const mongoose = require('mongoose');
const invoices = require("../Model/invoices");

//get All Invoices
const Allinvoices = async (req, res) => {
    try {
        const Supervisors = await invoices.find();
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//Create Invoices
const Createinvoices = async (req, res) => {
    const invoicess = req.body;
    const newinvoices = new invoices({ ...invoicess, creator: req.userId })
    try {
        await newinvoices.save();
        res.status(201).json(newinvoices);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//get invoice by ID
const GetinvoicesBYID = async (req, res) => {
    const { id } = req.params;
    try {
        const invoices = await invoices.findById(id);
        res.status(200).json(invoices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = { Allinvoices, GetinvoicesBYID, Createinvoices };
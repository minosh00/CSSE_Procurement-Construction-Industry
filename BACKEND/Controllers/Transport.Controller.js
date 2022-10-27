const mongoose = require('mongoose');
const Transport = require("../Model/Transport");




const TransportALL = async (req, res) => { 
    try {
        const Supervisors = await Transport.find();
                 
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const CreateTransport= async (req, res) => {

    const groups = req.body;

    const newGroups = new Transport({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetTransportID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await Transport.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}






module.exports ={CreateTransport, TransportALL,GetTransportID};









const mongoose = require('mongoose');
const Orders = require("../Model/Order");




const GetAllOrders = async (req, res) => { 
    let id = req.params;
    console.log("orderID",id.id);
    try {
        const Supervisors = await Orders.find({"orderID" : id.id});
                 
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const AllOrderStatus = async (req, res) => { 
    try {
        const Supervisors = await Orders.find();
                 
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const UpdateOrderById = async (req, res) => {

    const { id } = req.params;
    const {  OrderID, DeliveryAddress,Price,Description,status ,supervisorID,QTY} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatedSupervisor = {  OrderID, DeliveryAddress,Price,Description,status ,supervisorID,QTY, _id:id};

    await Orders.findByIdAndUpdate(id, updatedSupervisor, { new: true });

    res.json(updatedSupervisor);
}




const CreateOrder = async (req, res) => {

    const Supervisors = req.body;
    

    const newSupervisors = new Orders({ ...Supervisors, creator: req.userId })

    try {
        await newSupervisors.save();

        res.status(201).json(newSupervisors );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




module.exports ={CreateOrder ,UpdateOrderById ,GetAllOrders , AllOrderStatus};
const mongoose = require('mongoose');
const Orders = require("../Model/Order");

//get all Orders
const GetAllOrders = async (req, res) => {
    let id = req.params;
    // console.log("orderID", id.id);
    try {
        const Supervisors = await Orders.find({ "orderID": id.id });
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//get one Order by ID
const getOneOrder = async (req, res) => {
    let id = req.params.id;
    try {
        const Order = await Orders.find({ "creator": id });
        res.status(200).json(Order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//get all Order Status
const AllOrderStatus = async (req, res) => {
    try {
        const Supervisors = await Orders.find();
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//get order by ID
const OrderByID = async (req, res) => {
    const { id } = req.params;
    try {
        const TopicRequests = await Orders.findById(id);
        res.status(200).json(TopicRequests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Delete Order by ID
const RemoveOrder = async (req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Order" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

//Update Order by ID
const UpdateOrderById = async (req, res) => {
    const { id } = req.params;
    const { OrderID, DeliveryAddress, Price, Description, status, note, QTY, Deadline, Material } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);
    const updatedSupervisor = { OrderID, DeliveryAddress, Price, Description, status, QTY, note, Deadline, Material, _id: id };
    await Orders.findByIdAndUpdate(id, updatedSupervisor, { new: true });
    res.json(updatedSupervisor);
}

//View Order Transport by ID
const ViewOrderTransportById = async (req, res) => {
    const { id } = req.params;
    const { OrderID, DeliveryAddress, Price, Description, status, note, QTY, Deadline, Material } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);
    const updatedSupervisor = { OrderID, DeliveryAddress, Price, Description, status, QTY, note, Deadline, Material, _id: id };
    await Orders.findByIdAndUpdate(id, updatedSupervisor, { new: true });
    res.json(updatedSupervisor);
}

//View Order by ID
const ViewOrderssById = async (req, res) => {
    const { id } = req.params;
    const { OrderID, DeliveryAddress, Price, Description, status, note, QTY, Deadline, Material } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);
    const updatedSupervisor = { OrderID, DeliveryAddress, Price, Description, status, QTY, note, Deadline, Material, _id: id };
    await Orders.findByIdAndUpdate(id, updatedSupervisor, { new: true });
    res.json(updatedSupervisor);
}


//Create Order
const CreateOrder = async (req, res) => {
    const Supervisors = req.body;
    const status = req.body.QTY > 100000 ? "Pending" : "OK";
    // console.log(status);
    // console.log("creator ", Supervisors.userId);
    const newSupervisors = new Orders({ ...Supervisors, status: status, creator: Supervisors.userId == undefined ? "no creator" : Supervisors.userId })
    // console.log("created order", newSupervisors);
    try {
        await newSupervisors.save();
        res.status(201).json(newSupervisors);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get all decline orders
const RejectOrder = async (req, res) => {
    try {
        const orderss = await Orders.find({ status: 'decline' });
        res.status(200).json(orderss);
    } catch (err) {
        res.json(err);
    }
}

module.exports = { CreateOrder, UpdateOrderById, GetAllOrders, AllOrderStatus, getOneOrder, OrderByID, ViewOrderTransportById, RemoveOrder, ViewOrderssById, RejectOrder };
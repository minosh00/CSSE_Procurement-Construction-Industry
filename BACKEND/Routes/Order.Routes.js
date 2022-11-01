const express = require("express");
const router = express.Router();


const {CreateOrder ,UpdateOrderById ,GetAllOrders ,ViewOrderssById, AllOrderStatus, getOneOrder,OrderByID,ViewOrderTransportById,RemoveOrder,RejectOrder} = require("../Controllers/Order.Controller");


router.post("/CreateOrder",CreateOrder);
router.get("/GetAllOrders",GetAllOrders);
router.get("/GetOrder/:id",getOneOrder);
router.patch("/UpdateOrderById/:id",UpdateOrderById);
router.get("/AllOrderStatus",AllOrderStatus);
router.get("/OrderByID/:id",OrderByID);
router.get("/RejectOrder",RejectOrder);
router.get("/ViewOrderTransportById/:id",ViewOrderTransportById);
router.delete("/RemoveOrder/:id",RemoveOrder);
router.get("/ViewOrderssById/:id",ViewOrderssById);



module.exports = router;
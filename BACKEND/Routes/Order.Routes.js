const express = require("express");
const router = express.Router();


const {CreateOrder ,UpdateOrderById ,GetAllOrders , AllOrderStatus, getOneOrder,OrderByID,ViewOrderTransportById} = require("../Controllers/Order.Controller");


router.post("/CreateOrder",CreateOrder);
router.get("/GetAllOrders/:id",GetAllOrders);
router.get("/GetOrder/:id",getOneOrder);
router.patch("/UpdateOrderById/:id",UpdateOrderById);
router.get("/AllOrderStatus",AllOrderStatus);
router.get("/OrderByID/:id",OrderByID);
router.get("/ViewOrderTransportById/:id",ViewOrderTransportById);



module.exports = router;
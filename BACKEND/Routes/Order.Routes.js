const express = require("express");
const router = express.Router();

const {CreateOrder ,UpdateOrderById ,GetAllOrders , AllOrderStatus} = require("../Controllers/Order.Controller");


router.post("/CreateOrder",CreateOrder);
router.get("/GetAllOrders/:id",GetAllOrders);
router.patch("/UpdateOrderById/:id",UpdateOrderById);
router.get("/AllOrderStatus",AllOrderStatus);




module.exports = router;
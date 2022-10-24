const express = require("express");
const router = express.Router();

const {CreateOrder ,UpdateOrderById ,GetAllOrders , AllOrderStatus, getOneOrder} = require("../Controllers/Order.Controller");


router.post("/CreateOrder",CreateOrder);
router.get("/GetAllOrders/:id",GetAllOrders);
router.get("/GetOrder/:id",getOneOrder);
router.patch("/UpdateOrderById/:id",UpdateOrderById);
router.get("/AllOrderStatus",AllOrderStatus);




module.exports = router;
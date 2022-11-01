const express = require("express");
const router = express.Router();

const { createPayment, getAllPayments, getOnePayment } = require("../Controllers/Payment.controller");

router.post("/", createPayment);
router.get("/", getAllPayments);
router.get("/:id", getOnePayment);

module.exports = router;
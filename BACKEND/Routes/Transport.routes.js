const express = require("express");
const router = express.Router();

const { CreateTransport, TransportALL, GetTransportID } = require("../Controllers/Transport.Controller");

router.post("/createTransport", CreateTransport);
router.get("/TansportALL", TransportALL);
router.get("/GetTransportID/:id", GetTransportID);

module.exports = router;
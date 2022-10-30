const express = require("express");
const router = express.Router();


const {Allinvoices, GetinvoicesBYID,Createinvoices} = require("../Controllers/Invoice.controller");


router.post("/Createinvoices",Createinvoices);
router.get("/Allinvoices",Allinvoices);
router.get("/GetinvoicesBYID/:id",GetinvoicesBYID);



module.exports = router;
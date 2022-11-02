const express = require("express");
const router = express.Router();

const { createNote, getallnote, getonenote } = require("../Controllers/Note.controller");

router.post("/", createNote);
router.get("/", getallnote);
router.get("/getonenote/:id", getonenote);

module.exports = router;
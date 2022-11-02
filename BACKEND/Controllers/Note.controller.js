const NotesModel = require("../Model/Note");

const createNote = async (req, res) => {
  const note = req.body;
  const newNote = new NotesModel(note);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getallnote = async (req, res) => {
  const note = await NotesModel.find({});
  try {
    res.status(200).json(note);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getonenote = async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  try {
    res.status(200).json(note);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createNote, getallnote, getonenote };
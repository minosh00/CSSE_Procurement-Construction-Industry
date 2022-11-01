const paymentModel = require("../Model/Payment");

const createPayment = async (req, res) => {
  const payment = req.body;

  const newPayment = new paymentModel(payment);

  try {
    await newPayment.save();

    res.status(201).json(newPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllPayments = async (req, res) => {
  const payments = await paymentModel.find({});

  try {
    res.status(200).json(payments);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getOnePayment = async (req, res) => {
  const payment = await paymentModel.findById(req.params.id);

  try {
    res.status(200).json(payment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createPayment, getAllPayments, getOnePayment };
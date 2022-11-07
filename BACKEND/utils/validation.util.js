const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

/* This is a schema for validating the create invoices form. */
const InvoicesSchema = Joi.object({
  InvoicesID: Joi.string().min(3).required().label("InvoicesID"),
  OrderID: Joi.string().min(3).required().label("OrderID"),
  location: Joi.string().min(3).required().label("location"),
  Material: Joi.string().min(3).required().label("Material"),
  qty: Joi.string().min(3).required().label("qty"),
  Amount: Joi.string().min(3).required().label("Amount"),
}).unknown(true);


/* This is a schema for validating the  login  form. */
const loginSchema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email()
    .rule({ message: "Invalid E-mail address" })
    .label("E-mail"),
  password: Joi.string().required().label("Password"),
});

/* This is a schema for validating the create order. */
const OrderSchema = Joi.object({
  OrderID: Joi.string().min(3).required().label("OrderID"),
  DeliveryAddress: Joi.string().min(6).required().label("DeliveryAddress"),
  Material: Joi.string().min(3).required().label("Material"),
  creator: Joi.string().min(3).required().label("creator"),
  Deadline: Joi.string().min(3).required().label("Deadline"),
  QTY: Joi.string().min(3).required().label("QTY"),
  Price: Joi.string().min(3).required().label("Price"),
  Description: Joi.string().min(3).required().label("Description"),
}).unknown(true);


/* This is a schema for validating the create Payment form. */
const PaymentSchema = Joi.object({
  OrderID: Joi.string().min(3).required().label("OrderID"),
  amount: Joi.string().min(3).required().label("amount"),
  paymentMethod: Joi.string().min(5).required().label("paymentMethod"),
  phoneNumber: Joi.string().min(10).required().label("phoneNumber"),
}).unknown(true);


module.exports = {
  TransportSchema,
  InvoicesSchema,
  loginSchema,
  OrderSchema,
  PaymentSchema
};
/* This is a schema for validating the create transport form. */
const TransportSchema = Joi.object({
  OrderID: Joi.string().min(3).required().label("OrderID"),
  TransportID: Joi.string().min(3).required().label("TransportID"),
  location: Joi.string().min(3).required().label("location"),
  VehicleNumber: Joi.string().min(3).required().label("VehicleNumber"),
}).unknown(true);

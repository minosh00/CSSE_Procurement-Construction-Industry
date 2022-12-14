const express = require("express");
const dotenv = require("dotenv");
const fileupload = require('express-fileupload'); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
dotenv.config();

//import routes
const user = require("./Routes/userRoutes");
const order = require("./Routes/Order.Routes");
const Transport = require("./Routes/Transport.routes");
const Invoices = require("./Routes/Invoices.Routes");
const Payment = require("./Routes/Payment.routes");
const Note = require("./Routes/Note.Routes");

app.use(cors({
  origin: "*",
}));


//initialize Port
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use Routes
app.use("/user",user);
app.use("/order",order);
app.use("/Transport",Transport);
app.use("/Invoices",Invoices);
app.use("/payment", Payment);
app.use("/note", Note);

//DB connection
mongoose.connect(
  process.env.MDB_CONNECT_STRING, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB Connected Successfully");
  })
  .catch((err) => console.log("DB Connection Failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
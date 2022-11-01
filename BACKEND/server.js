const express = require("express");
const dotenv = require("dotenv");
const fileupload = require('express-fileupload'); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const user = require("./Routes/userRoutes");
const order = require("./Routes/Order.Routes");
const Transport = require("./Routes/Transport.routes");
const Invoices = require("./Routes/Invoices.Routes");
const Payment = require("./Routes/Payment.routes");


dotenv.config();


app.use(cors({
  origin: "*",
}));



const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use Routes
app.use("/user",user);
app.use("/order",order);
app.use("/Transport",Transport);
app.use("/Invoices",Invoices);
app.use("/payment", Payment);

//DB connection

mongoose.connect(
  process.env.MDB_CONNECT_STRING, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});



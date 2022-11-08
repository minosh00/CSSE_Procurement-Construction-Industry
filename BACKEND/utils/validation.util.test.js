const validate = require("./validation.util");

//Validate transport data
test("Validate OrderID With Correct Data", () => {
  const data = {
    OrderID: "ord12344",
    TransportID: "Trp12344",
    location: "wadduwa",
    VehicleNumber: "ABZ-2323"
  };
  expect(validate.TransportSchema.validateAsync(data)).resolves.toEqual(data);
});


test("Validate invoices With Correct Data", () => {
  const data = {
    OrderID: "ord12344",
    InvoicesID: "IN2395588",
    location: "wadduwa",
    Material: "THIS IS A TEST Material ",
    qty: "12123",
    Amount: "3434555"
  };
  expect(validate.InvoicesSchema.validateAsync(data)).resolves.toEqual(data);
});


//Validate login data
test("Validate login With Correct Data", () => {
  const data = {
    email: "test@example.com",
    password: "123456.Password",
  };
  expect(validate.loginSchema.validateAsync(data)).resolves.toEqual(data);
});

//Validate incomplete Transport  data (missing location and vehicle number )
test("Validate Transport data With Incomplete Data (missing location and vehicle number )", () => {
  const data = {
    TransportID: "trp19238",
    OrderID: "ord122737"
  };
  expect(validate.TransportSchema.validateAsync(data)).rejects.not.toEqual(data);
});


//Validate order data
test("Validate  OrderID  With Correct Data", () => {
  const data = {
    OrderID: "ord12344",
    DeliveryAddress: "test DeliveryAddress",
    Material: "test Material ",
    creator: "54795749385798467896753u",
    Deadline: "2022-10-23",
    QTY: "1000",
    Price: "1230000",
    Description: "test Description "
  };
  expect(validate.OrderSchema.validateAsync(data)).resolves.toEqual(data);
});


//Validate incomplete order  data (missing supplierID and qty)
test("Validate Order  data  With Incomplete Data (missing supplierID and qty)", () => {
  const data = {
    OrderID: "ord12344",
    DeliveryAddress: "test DeliveryAddress",
    Material: "test Material ",
    Deadline: "2022-10-23",
    Price: "1230000",
    Description: "test Description "
  };
  expect(validate.OrderSchema.validateAsync(data)).rejects.not.toEqual(data);
});


//Validate payment data
test("Validate  PaymentID  With Correct Data", () => {
  const data = {
    OrderID: "ord12344",
    amount: "500000",
    paymentMethod: "test paymentMethod ",
    phoneNumber: "0714567876",
  };
  expect(validate.PaymentSchema.validateAsync(data)).resolves.toEqual(data);
});
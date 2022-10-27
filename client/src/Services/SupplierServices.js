import axios from 'axios';


let createSupervisorURL = "http://localhost:5000/order/CreateOrder"; 
let AllSuplierURL = "http://localhost:5000/order/AllOrderStatus";
let GetAllOrdersURL = "http://localhost:5000/order/GetAllOrders/";
let GetOneOrderURL = "http://localhost:5000/order/GetOrder/";
let UpdateOrderURL = "http://localhost:5000/order/UpdateOrderById/";
let GetOneURL = "http://localhost:5000/order/OrderByID/";
let ViewOrderTransportByIdURL = "http://localhost:5000/order/ViewOrderTransportById/"


export async function createorder(data) {
    const alldata = {
      

        OrderID:data.OrderID,
        DeliveryAddress:data.DeliveryAddress,
        QTY:data.QTY,
        Price:data.Price,
        Deadline:data.Deadline,
        Material:data.Material,
        Description:data.Description,
        userId:data?.userId
    };


    return await axios.post(createSupervisorURL,alldata);
}



export async function AllSupplier() { 
 
    return await axios.get(AllSuplierURL);
}



export async function GetIDoRDER(id) { 
    console.log(id);
    return await axios.get(GetOneOrderURL+id);
}



export async function OrderByID(id) { 
    console.log(id);
    return await axios.get(GetOneURL+id);
}





export async function UpdateOrderById(id,data) {
    const alldata = {
      
        OrderID:data.OrderID,
        DeliveryAddress:data.DeliveryAddress,
        QTY:data.QTY,
        Price:data.Price,
        Description:data.Description,
        status:data.status,
        Deadline:data.Deadline,
        Material:data.Material,
        note:data.note,
        userId:data.userId,
    };


    return await axios.patch(UpdateOrderURL + id,alldata);
}











export async function ViewOrderTransportById(id,data) {
    const alldata = {
      
        OrderID:data.OrderID,
        DeliveryAddress:data.DeliveryAddress,
        QTY:data.QTY,
        Price:data.Price,
        Description:data.Description,
        status:data.status,
        Deadline:data.Deadline,
        Material:data.Material,
        note:data.note,
        userId:data.userId,
    };


    return await axios.patch(ViewOrderTransportByIdURL + id,alldata);
}


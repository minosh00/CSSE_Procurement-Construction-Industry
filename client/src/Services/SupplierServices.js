import axios from 'axios';


let createSupervisorURL = "http://localhost:5000/order/CreateOrder"; 
let AllSuplierURL = "http://localhost:5000/order/AllOrderStatus";
let GetAllOrdersURL = "http://localhost:5000/order/GetAllOrders/";


export async function createorder(data) {
    const alldata = {
      

        OrderID:data.OrderID,
        DeliveryAddress:data.DeliveryAddress,
        QTY:data.QTY,
        Price:data.Price,
        Description:data.Description,
  
    };


    return await axios.post(createSupervisorURL,alldata);
}



export async function AllSupplier() { 
 
    return await axios.get(AllSuplierURL);
}



export async function GetIDoRDER(id) { 
    console.log(id);
    return await axios.get(GetAllOrdersURL+id);
}



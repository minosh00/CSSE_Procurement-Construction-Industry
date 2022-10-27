
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



const  DisplayAllOrders = ()=> {


 const [serachItem,setserachItem] =useState([]);
 const [Order, setusers] = useState();
 const [loading, setloading] = useState(true);

 useEffect(async () => {
   try {
     const data = await (
       await axios.get("http://localhost:5000/order/AllOrderStatus/")
     ).data;
     setusers(data);
     setloading(false);
   } catch (error) {
     console.log(error);
     setloading(false);
   }
 }, []);


 const removeOrder = id =>{
   axios.delete(`http://localhost:5000/order/RemoveOrder/${id}`)
   .then(res => 
     
     {Swal.fire('Congrats' , ' Remove Order successfully ' , 'success')
 
 }    )
 setusers(Order.filter(elem=>elem._id !== id))
 }

 return (
    <div className="container">
      <br></br>   
      <br></br> 
      <h3 className=" fw-bolder mb-4"><center>All Orders</center></h3>  
      <br></br>
      <div class="input-group">
      <div className="col-md-4">
        <input type="search" class="form-control" placeholder="Search by Employee Name  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
   aria-describedby="search-addon" />
        </div>
    </div>

    <MDBTable align=''>
      <MDBTableHead>
       <tr>
         <th scope='col'>Order ID  </th>
         <th scope='col'>Delivery Address </th>
         <th scope='col'>Material  </th>
         <th scope='col'>Deadline  </th>
         <th scope='col'>qty  </th>
         <th scope='col'>Total Amount </th>
         <th scope='col'>Actions</th>
       </tr>
      </MDBTableHead>
    <MDBTableBody>
    {Order &&
             Order.filter((users)=>{
               if(serachItem ==""){
                     return users
               }else if(users.OrderID.toLowerCase().includes(serachItem.toLowerCase())){
            
                 return users
    }   }).map((user) => {
    return (
      <tr>
        <td>
          <div className='d-flex align-items-center'>
            <div className='ms-3'>
            <MDBBadge color='success' pill>
              <p className='fw-bold mb-1'>{user.OrderID}</p>
              </MDBBadge>
            </div>
          </div>
        </td>
        <td>
          <p className='fw-normal mb-1'>  {user.DeliveryAddress}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>  {user.Material}</p>
        </td>
        <td>
          <MDBBadge color='success' pill>
            <p className='fw-normal mb-1'>  {user.Deadline}</p>
          </MDBBadge>
        </td>
        <td>
          <p className='fw-normal mb-1'>  {user.QTY}</p>
        </td>
        <td>
          <p className='fw-normal mb-1'>  {user.Price}</p>
        </td>
        <td>
   
          <h5><span  onClick={()=>removeOrder(user._id)}  type="submit" class="badge rounded-pill badge-danger">Remove Order</span></h5> 
       
        </td>
      </tr>
    );
  })}
  </MDBTableBody>
  </MDBTable>
  </div>
   
 );
}
export default DisplayAllOrders ;
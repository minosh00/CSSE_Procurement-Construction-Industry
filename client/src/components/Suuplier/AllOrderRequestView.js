
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {  GetIDoRDER} from "../../Services/SupplierServices";
import {AuthUser} from "../../Services/AuthServices" 

function AllOrderRequestView() {

  const [users, setusers] = useState();


   const getAuthUser = async () => {
       let token = localStorage.getItem("token");
       let data =  await AuthUser(token);
       GetRequests(data?.data?._id);
   }


  const GetRequests = async (id) => {
   try {
       const data = await GetIDoRDER(id);
       console.log("Data",data);
       var arraydata = [];
       data?.data?.map((item)=>{
           if(item)
           {
               arraydata.push(item);
           }
       })
       setusers(arraydata);
 
     } catch (error) {
       console.log(error);

     }
  }

  useEffect(() => {
   getAuthUser();
  }, []);






  return (

   <div className="">
   <div style={{ textAlign: "center" }}>
<div style={{ marginTop: "30px" }}>
    <center><h1 style={{ color: "purple" }}><b>Site Manager Request Orders</b></h1></center>
    <img src='' />
</div>

    <div className="row">
   

      <div className="col-md-7">
   
     
<br></br><br></br>
        <table className="table table-bordered " style={{marginLeft:"340px" , marginTop:"-20px"}}>
          <thead className="bs">
            <tr>
              <th style={{color:"black" , backgroundColor:"yellow" }}>order id </th>
              <th  style={{color:"black" , backgroundColor:"yellow"}}  > DeliveryAddress </th>
              <th  style={{color:"black" , backgroundColor:"yellow"}}  >qty </th>
              <th  style={{color:"black" , backgroundColor:"yellow"}}  >price</th>
              <th  style={{color:"black" , backgroundColor:"yellow"}}  >status</th>

           
            </tr>
          </thead>

          <tbody >
          {users &&
              users.map((users) => {
             
                return (
                  <tr>
                    <td>{users.OrderID}</td>
                    <td >{users.DeliveryAddress}</td>
                    <td >{users.QTY}</td>
                    <td >{users.Price}</td>
                    <td>{users.status === "OK"? <button onClick={() => window.location.href = `/ViewOrder/${users._id}`} className="btn btn-danger">View Order</button>: "Pending"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div> 
    </div>
    </div>
  );
}

export default AllOrderRequestView;
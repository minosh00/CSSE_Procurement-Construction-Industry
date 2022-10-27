
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";

function DisplayPendingOrderList() {

    const [users, setusers] = useState();
    const [serachItem,setserachItem] =useState([]);
    const [loading, setloading] = useState(true);
  
  
    useEffect(async () => {
  
      try {
        const data = await (
          await axios.get("http://localhost:5000/order/AllOrderStatus/")
        ).data;
          console.log("all data",data)
          var array =[]
        data?.map((users)=>{
          if(users?.status=="Pending")
          {
              array.push(users);
          }
      });
      setusers(array);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    }, []);
  
  
    function pdfGenerat(){
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        
        doc.autoTable({
               
                body: [
                    [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
                  ],
                })
            autoTable(doc, { html: '#cusdet' })
           doc.save('TopicRegister.pdf')
      
              }
    



  
  
  
    return (
  
      <div className="">
      <div style={{ textAlign: "center" }}>
   <div style={{ marginTop: "30px" }}>
       <center><h1 style={{ color: "purple" }}><b>All Pending Orders</b></h1></center>
      
   </div>
  
  
  
  
  
      <div className="row">
    
        {loading && <Loader />}
  
        <div className="col-md-9">
        
          
      
          <div class="input-group">
    <div className="col-md-9">
    <h4>You Can  Search order Using Order ID  </h4>
    <input type="search" class="form-control rounded" style={{ marginRight:"120%" , marginTop:"30px"}} placeholder="Search by GroupID  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
      aria-describedby="search-addon" />
    </div>
  </div>
  
  <br></br> <br></br>
          <br></br>
          <button className="btn btn-danger btn-sm"   onClick={pdfGenerat}>Download PDF</button>
  
          <table className="table table-bordered " style={{marginLeft:"20%" , width:""}}>
            <thead className="bs">
              <tr>
                <th  style={{color:"white" , backgroundColor:"black"}} >OrderID </th>
                <th  style={{color:"white" , backgroundColor:"black"}} >DeliveryAddress</th>
                <th  style={{color:"white" , backgroundColor:"black"}} >Deadline  </th>
              <th  style={{color:"white" , backgroundColor:"black"}} >Material  </th>
                <th  style={{color:"white" , backgroundColor:"black"}} >qty</th>
                <th  style={{color:"white" , backgroundColor:"black"}} >Price</th>
                <th  style={{color:"white" , backgroundColor:"black"}} >status</th>
                <th  style={{color:"white" , backgroundColor:"black"}} > check Order </th>
              </tr>
            </thead>
  
            <tbody id="cusdet"  >
              {users &&
                users.filter((users)=>{
                  if(serachItem ==""){
                        return users
                  }else if(users.OrderID.toLowerCase().includes(serachItem.toLowerCase())){
               
                    return users
     }   })
                  
                .map((users) => {
                
                
                  return (
                    <tr>
                      <td>{users.OrderID}</td>
                      <td>{users.DeliveryAddress}</td>
                      <td>{users.Deadline}</td>
                      <td>{users.Material}</td>
                      <td>{users.QTY}</td>
                      <td>{users.Price}</td>
                      <td>     <button className="btn btn-danger"  >  {users.status} </button></td>
                      <td>  <Link to ={{pathname:`/UpdateOrderById/${users?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} >Order Evaluate </button>
                                    </Link>&nbsp;</td>
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
  
  export default DisplayPendingOrderList;
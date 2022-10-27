
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { 
	Badge,
	Card,
	CardHeader,
	CardTitle,
	CardBody,
    Form,
    Input,
	Label,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
   } from "reactstrap";

import { Link } from "react-router-dom";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";

function DisplayOrderDeliverdStatus() {

    const [users, setusers] = useState();
    const [serachItem,setserachItem] =useState([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(async () => {
  
      try {
        const data = await (
          await axios.get("http://localhost:5000/Transport/TansportALL/")
        ).data;
          console.log("all data",data)
          var array =[]
        data?.map((users)=>{
          if(users?.TransportStatus=="delivered")
          {
              array.push(users);
          }
      });
      setusers(array);
      setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
           doc.save('TransportStatus.pdf')
      
              }
    



  
  
  
    return (
  
      <div className="">
      <div style={{ textAlign: "center" }}>
   <div style={{ marginTop: "30px" }}>
       <center><h1 style={{ color: "purple" }}><b>All Complete TransportStatus </b></h1></center>
      
   </div>
  
  
  
  
  
      <div className="row">
    
        {loading }
  
        <div className="col-md-9">
        
          
      
          <div class="input-group">
    <div className="col-md-9">
    <h4>You Can  Search Order Status Using Order ID  </h4>
    <input type="search" class="form-control rounded" style={{ marginRight:"120%" , marginTop:"30px"}} placeholder="Search by GroupID  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
      aria-describedby="search-addon" />
    </div>
  </div>
  
  <br></br> <br></br>
          <br></br>
          <button className="btn btn-danger btn-sm"  style={{marginTop:"-100px" , marginLeft:"100px"}} onClick={pdfGenerat}>Download PDF</button>
  
          <table className="table table-bordered " style={{marginLeft:"20%" , marginTop:"-20px" , width:""}}>
            <thead className="bs">
              <tr>
                <th  style={{color:"white" , backgroundColor:"black"}} >OrderID </th>
                <th  style={{color:"white" , backgroundColor:"black"}} >TransportID</th>
                <th  style={{color:"white" , backgroundColor:"black"}} >Send location   </th>
                <th  style={{color:"white" , backgroundColor:"black"}} >VehicleNumber</th>
                <th  style={{color:"white" , backgroundColor:"black"}} >Transport Status</th>
             
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
                      <td>{users.TransportID}</td>
                      <td>{users.location}</td>
                      <td>{users.VehicleNumber}</td>
          
                    <td>
	       	 <Badge color="success" style={{fontSize:"15px"}} >{users.TransportStatus} </Badge></td>
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
  
  export default DisplayOrderDeliverdStatus;
 

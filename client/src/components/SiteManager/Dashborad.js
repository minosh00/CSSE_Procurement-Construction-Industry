  
import { Link, useNavigate, useParams } from "react-router-dom";
 import React from 'react'
import avatar from "../images/order.gif"
import avatar2 from "../images/order3.gif"
import avatar3 from "../images/order.gif"
import avatar4 from "../images/order.gif"


 const Dashborad = () => {


    const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
}




  return (
	
    <div className="">
    <div style={{ textAlign: "center" }}>
<br></br>
<br></br>
   <h1>Welcome to the Site Manager Home </h1>

		<br/>

<div className="container" style={{marginLeft:'20%'}}>
  <div style={{marginTop:"20px"}}>
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
    <img src={avatar} alt="" width={"70%"} height={"60%"} />
      <div class="card-body">
        <h5 class="card-title">Request Orders</h5>
        <p class="card-text">You can view All Suppliers And Request orders.</p>
        <Link  to="/RequestOrder">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card" style={{marginTop:'20%'}}>
    <img src={avatar2} alt="" width={"100%"} height={""} />
      <div class="card-body">
        <br></br>
        <h5 class="card-title"> View All Delivery  Status</h5>
        <p class="card-text">view all supplier delivered status  .</p>
        <Link  to="/DisplayOrderDeliverdStatus">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>   
         
      </div>
      
    </div>
  </div>


</div>
</div>
</div>
</div>
</div>
  )


}


export default Dashborad;
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import delivery from "../images/delivery.gif"
import build from "../images/build.gif"
import { MDBCard } from 'mdb-react-ui-kit'

const DashboardSupply = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  }

  return (

    <div className="container shadow my-5 py-5 w-50 hform mx-auto">
      <h3 className=" fw-bolder"><center><b>Welcome to the Supplier Home </b></center></h3>
      <hr /> <br />
      <div className="container">
        <div>
          <div class="row">
            <div class="col mb-6">
              <MDBCard shadow='15' border='dark' background='white' className='mb-6'>
                <h5 class="card-title py-2"><center><b>All Orders  </b></center></h5>
                <img src={build} alt="build" className="dash_img" />
                <div class="card-body">
                  <center>
                    <p class="card-text">View All Orders and arrange delivery </p>
                    <Link to="/RequestOrder">
                      <button className="btn btn-outline-success" type="submit" >
                        Click Here
                      </button>
                    </Link>
                  </center>
                </div>
              </MDBCard>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )


}


export default DashboardSupply;
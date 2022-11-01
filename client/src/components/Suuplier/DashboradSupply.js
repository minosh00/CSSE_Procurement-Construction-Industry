import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import build from "../images/build.gif"
import delivery from "../images/delivery.gif"
import { MDBCard } from 'mdb-react-ui-kit'
import SideNavbarSup from '../Auth/SideNavbarSup'

const DashboardSupply = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  }

  return (
    <div>
      <SideNavbarSup />
      <div className="container shadow my-5 py-5 w-50 hform mx-auto">
        <h3 className=" fw-bolder"><center><b>Welcome to the Supplier Home </b></center></h3>
        <hr /> <br />
        {/* <div className="container">
          <div>
            <div class="row">
              <div class="col mb-6">
                <MDBCard shadow='15' border='dark' background='white' className='mb-6'>
                  <h5 class="card-title py-2"><center><b>Request Orders</b></center></h5>
                  <img src={build} alt="build" className="dash_img" />
                  <div class="card-body">
                    <center>
                      <p class="card-text">View All Suppliers and Request Orders</p>
                      <Link to="/RequestOrder">
                        <button className="btn btn-outline-success" type="submit" >
                          Click Here
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div>
              <div class="col mb-6">
                <MDBCard shadow='15' border='dark' background='white' className='mb-3'>
                  <h5 class="card-title py-2"> <center><b> All Delivery </b></center></h5>
                  <img src={delivery} alt="delivery" className="dash_img hi" />
                  <div class="card-body">
                    <center>
                      <p class="card-text">View all Supplier Delivered Status</p>
                      <Link to="/AllOrderRequestView">
                        <button className="btn btn-outline-success mx-auto" type="submit" >
                          Click Here
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )


}


export default DashboardSupply;
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import delivery from "../images/delivery.gif"
import build from "../images/build.gif"
import { MDBCard } from 'mdb-react-ui-kit'
import SideNavbar from "../Auth/SideNavbar";

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  }

  return (

    <div>
      <SideNavbar />
      <div className="container shadow my-5 py-5 w-50 mx-auto">
        <h3 className=" fw-bolder"><center><b>Welcome to the Admin Dashboard </b></center></h3>
        <hr /> <br />
        <div className="container">
          <div>
            <div class="row">
              <div class="col mb-4 mx-auto">
                <MDBCard shadow='15' border='dark' background='white' className='mb-4'>
                  <h5 class="card-title py-2"><center><b>View Suppliers</b></center></h5>
                  <center><img src={build} alt="build" className="dash_i" /></center>
                  <div class="card-body">
                    <center>
                      <Link to="/AllSuppliers">
                        <button className="btn btn-success" type="submit" >
                          View
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div>
              {/* <div class="col mb-6">
                <MDBCard shadow='15' border='dark' background='white' className='mb-3'>
                  <h5 class="card-title py-2"> <center><b> All Delivery </b></center></h5>
                  <img src={delivery} alt="delivery" className="dash_img hi" />
                  <div class="card-body">
                    <center>
                      <p class="card-text">View all Supplier Delivered Status</p>
                      <Link to="/DisplayOrderDeliverdStatus">
                        <button className="btn btn-outline-success mx-auto" type="submit" >
                          Click Here
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}


export default DashboardAdmin;
import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from '../images/loginn.png';

const NavBar = () => {

  const navigate = useNavigate();

  let userRole = localStorage.getItem('userRole');

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/");
  }



  return (
    <div>
      <div>
        <nav class="navbar  navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img src={Login} alt="" width="160" height="100" />
          </a>
          <a class="navbar-brand" href="/">
          Sankens Constructions Industry
          </a>

          <div className="container-fluid">

            <>
            </>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

            
                <li class="nav-item">
                  <a style={{ display: userRole == "supplier" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/RequestOrder" aria-current="page">Request Order</a>
                </li>
                <li class="nav-item">
                  <a style={{ display: userRole == "supplier" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/AllOrderRequestView" aria-current="page"> All Order Request View</a>
                </li>
                <li class="nav-item">
                  <a style={{ display: userRole == "supplier" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/" aria-current="page">Edit Restaurants</a>
                </li>
                <li class="nav-item">
                  <a style={{ display: userRole == "supplier" ? "flex" : "none", textDecoration: "none" }} class="nav-link" href="/" aria-current="page">Edit Employee</a>
                </li>
         
           
              </div>
            </div>
          </div>


          <button onClick={handleSubmit} className="btn btn-secondary toggle" aria-haspopup="true" aria-expanded="false" type="submit" style={{ float: "right", marginRight: "10px", display: userRole ? "flex" : "none" }}>
            {"Logout"}
          </button>

        </nav>
      </div>
    </div>

  );
};



export default NavBar;
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterSiteManager } from '../../Services/AuthServices';
import Swal from "sweetalert2";
import '../Auth/ClientLogin.css'

const RegisterUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [supplierAddress, setsupplierAddress] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [password, setPassword] = useState('');


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlesetsupplierAddress = (e) => {
    setsupplierAddress(e.target.value);
  };

  const handlecompanyname = (e) => {
    setcompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      {
        Swal.fire('error', 'Fill The All Data ', 'error')
        navigate("/register");
      }
    } else {
      let newdata = {
        name: name,
        email: email,
        supplierAddress: supplierAddress,
        companyName: companyName,
        password: password,
      }
      let studentdata = await RegisterSiteManager(newdata);
      console.log("return data", studentdata);
      localStorage.setItem("token", studentdata.data.token);
      localStorage.setItem("userRole", studentdata.data.userRole);
      {
        Swal.fire('Congrats', 'Successfully create Your Account ', 'success')
        navigate("/");
      }
    }
  };

  return (
    <div>
      <div className="container shadow my-4">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center forml order-2">
            <h3 className="display-4 fw-bolder text-center"> Welcome </h3>
            <p className="lead text-center"> Enter User Details to Register </p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/login" className="btn btn-light rounded-pill pb-2 w-50">Login</NavLink>
          </div>
          <div className="col-md-7 p-5">
            <h1 className="display-6 fw-bolder mb-2">REGISTER</h1>
            <form className="form">
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="name">Full Name</label>
                  <input type="name"
                    name="name"
                    onChange={handleName} value={name}
                    className="form-control"
                    placeholder="Enter Your Name" />
                </div>

                <div class="col-md-6">
                  <label for="name">Supplier Address</label>
                  <input type="text"
                    name="supplierAddress"
                    onChange={handlesetsupplierAddress} value={supplierAddress}
                    className="form-control"
                    placeholder="Enter Supplier Address" />
                </div>

              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="name">Company Name</label>
                  <input type="text"
                    name="companyName"
                    onChange={handlecompanyname} value={companyName}
                    className="form-control"
                    placeholder="Enter Company Name" />
                </div>


                <div class="col-md-6">
                  <label for="name">E-mail Address</label>
                  <input type="email"
                    name="email"
                    onChange={handleEmail} value={email}
                    className="form-control"
                    placeholder="Enter Your E-mail" />
                </div>
              </div>

              <div className='row py-3'>
                <div class="col-md-12">
                  <label for="name">Password</label>
                  <input type="password"
                    name="password"
                    onChange={handlePassword} value={password}
                    className="form-control"
                    placeholder="Enter Your Password" />
                </div>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember your Password</label>
              </div>
              <button type="submit" onClick={handleSubmit} class="btn btn-primary w-100 mt-4 rounded-pill">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RegisterUser;
import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterSupplier} from '../../Services/AuthServices';
import Swal from "sweetalert2";
import logo from '../images/Easier-task-assignment.png'
import './ClientLogin.css'


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
      if (name === '' || email === '' || password === '') {
        {   Swal.fire('error' , 'Fill The All Data ' , 'error')
        navigate("/register");
          }
      } else {
          let newdata = {
              name:name,
              email:email,
              supplierAddress:supplierAddress,
              companyName:companyName,
              password:password,
          }
          let studentdata =  await RegisterSupplier(newdata);
          console.log("return data",studentdata);
          localStorage.setItem("token",studentdata.data.token);
          localStorage.setItem("userRole",studentdata.data.userRole);
          {   Swal.fire('Congrats' , 'Successfully create Your Account ' , 'success')
          navigate("/");
            }
      }
    };



	return (
		<div>
			     <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{"font-family": 'Chilanka'}} ><b>Welcome to   Sankens Constructions Industry</b></h1></center> 
        </div>
        <br/>
        
        </center>
		<br/>
		<div className="container">
<div className="container mt-5">
              <div className="card card0 border-0">
                  <div className="row d-flex">
                      <div className="col-lg-6">
                          <div className="card1 pb-5">
                     
                              <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={logo} style={{height:"380px" , width:"450px"}} className="image" /> </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                      <form className="form" >
                              <div className="card2 card border-0 px-4 py-5">
                              <h1> SIGN UP</h1>
                              <br></br>
                                  <div class="form-floating mb-3">
                                      <input class="form-control"  onChange={handleName} value={name}  placeholder="Enter Full Name "  />
                                      <label for="floatingInput">Email </label>
                                  </div>

                                  <div class="form-floating mb-3">
                                      <input class="form-control" type="text"   onChange={handlesetsupplierAddress}  value={supplierAddress}  placeholder="Enter supplier Address "	minLength="4" required />
                                      <label for="floatingPassword"> supplier Address</label>
                                  </div>


                                  <div class="form-floating mb-3">
                                      <input class="form-control" type="text"    onChange={handlecompanyname}  value={companyName}  placeholder="Enter Company Name " 	minLength="4" required />
                                      <label for="floatingPassword"> Company Name</label>
                                  </div>

                                  <div class="form-floating mb-3">
                                      <input class="form-control"    onChange={handleEmail}  value={email}  placeholder="Enter Email"  />
                                      <label for="floatingInput">Email </label>
                                  </div>


                                  <div class="form-floating mb-3">
                                      <input class="form-control"   onChange={handlePassword}     value={password} type="password"   placeholder="Enter Password "  />
                                      <label for="floatingInput">Password </label>
                                  </div>



                                 



                                  <div class="form-check mb-3">
                                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                  <label class="form-check-label" for="rememberPasswordCheck">
                                      Remember password
                                  </label>
                              </div>
                                  <div className="row mb-3 px-3">
                                  <a ><button  type="submit" onClick={handleSubmit} className="btn btn-danger">Register</button></a>
                                  </div>
                                  <div>
                                
                                  <b><small>Have an Account? <a href="/login" className="text-danger "><b>Login</b></a></small></b>
                                
                            </div>
                              </div>
                          </form>
                       
                      </div>
                  </div>

            
              </div>
          </div>
</div>

<br></br><br></br>    <br></br><br></br>    <br></br><br></br>
</div>
	
	);
};

export default RegisterUser;
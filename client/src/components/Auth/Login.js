import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginSupplier } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import logo from '../images/loginnn.webp'
import './ClientLogin.css'

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginSupplier(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("userRole",data.data.userRole);
            localStorage.setItem("user", data.data.user);
            localStorage.setItem("userId", data.data.userId);
			{   Swal.fire('Congrats' , 'Successfully login Your Account ' , 'success')
			navigate("/StudentProfile");
			}

        }
        else
        {
			   Swal.fire('error' , 'error login Your Account ' , 'error')
               navigate("/RequestOrder");
			  
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
                      <form className="form" onSubmit={(e) => onSubmit(e)}>
                              <div className="card2 card border-0 px-4 py-5">
                              <h1> SIGN IN</h1>
                              <br></br>
                                  <div class="form-floating mb-3">
                                      <input class="form-control"  name="email" value={email} onChange={(e) => onChange(e)} required placeholder="Enter Email" />
                                      <label for="floatingInput">Email </label>
                                  </div>

                                  <div class="form-floating mb-3">
                                      <input class="form-control" type="password" placeholder="Password" 	name="password" 	minLength="6" value={password} onChange={(e) => onChange(e)} required />
                                      <label for="floatingPassword">Password</label>
                                  </div>

                                  <div class="form-check mb-3">
                                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                  <label class="form-check-label" for="rememberPasswordCheck">
                                      Remember password
                                  </label>
                              </div>
                                  <div className="row mb-3 px-3">
                                      <button type="submit" className="btn btn-danger ">Login</button>
                                  </div>
                                  <div>
                                
                                <b><small>Dont Have an Account? <a href="/register" className="text-danger "><b>Register</b></a></small></b>
                                
                            </div>
                              </div>
                          </form>
                       
                      </div>
                  </div>
              </div>
          </div>
</div>

</div>
	
	);
};

export default Login;
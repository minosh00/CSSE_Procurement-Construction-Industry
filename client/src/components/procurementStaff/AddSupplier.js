import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RegisterSupplier } from '../../Services/AuthServices';
import Swal from "sweetalert2";
import logo from '../images/test.png'
import '../Auth/ClientLogin.css'
import SideNavbar from '../Auth/SideNavbar';

const AddSupplier = () => {

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
            let studentdata = await RegisterSupplier(newdata);
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
            <SideNavbar />
            <div class="container my-5 py-5 mx-auto">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card border-success mb-4 border-4" style={{ maxWidth: '48rem' }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                    </div> <br />
                                    <div class="col">
                                        <center>
                                            <img src={logo} alt='' />
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card" style={{ maxWidth: '98rem' }}>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <center>
                                                <h1>Add Suppliers</h1>
                                            </center>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <form className="form" >
                                                <div>
                                                    <br></br>
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" onChange={handleName} value={name} placeholder="Enter Full Name " />
                                                        <label for="floatingInput"> Full Name  </label>
                                                    </div>

                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" type="text" onChange={handlesetsupplierAddress} value={supplierAddress} placeholder="Enter supplier Address " minLength="4" required />
                                                        <label for="floatingPassword"> Supplier Address</label>
                                                    </div>


                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" type="text" onChange={handlecompanyname} value={companyName} placeholder="Enter Company Name " minLength="4" required />
                                                        <label for="floatingPassword"> Company Name</label>
                                                    </div>

                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" onChange={handleEmail} value={email} placeholder="Enter Email" />
                                                        <label for="floatingInput">Email </label>
                                                    </div>


                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" onChange={handlePassword} value={password} type="password" placeholder="Enter Password " />
                                                        <label for="floatingInput">Password </label>
                                                    </div>







                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                                        <label class="form-check-label" for="rememberPasswordCheck">
                                                            Remember password
                                                        </label>
                                                    </div>
                                                    <div className="row mb-3 px-3">
                                                        <a ><button type="submit" onClick={handleSubmit} className="btn btn-danger">Add new Supplier</button></a>
                                                    </div>
                                                    <div>



                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>  <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSupplier;
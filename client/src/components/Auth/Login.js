import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
        console.log("data", data);
        if (data.data.token) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userRole", data.data.userRole);
            localStorage.setItem("user", data.data.user);
            localStorage.setItem("userId", data.data.userId);
            {
                Swal.fire('Congrats', 'Successfully Login to your Account', 'success')
                navigate("/Profile");
            }

        }
        else {
            Swal.fire('error', 'error login Your Account ', 'error')
            navigate("/RequestOrder");

        }
    };


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center forml">
                        <h3 className="display-4 fw-bolder"> Welcome Back</h3>
                        <p className="lead text-center">Enter Your Credentials to Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form className="form" onSubmit={(e) => onSubmit(e)}>
                            <div class="mb-3">
                                <label for="username" class="form-label">E-mail</label>
                                <input name="email" value={email} onChange={(e) => onChange(e)} type="text" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input name="password" minLength="6" value={password} onChange={(e) => onChange(e)} autoComplete="on" type="password" class="form-control" required />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 rounded-pill">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
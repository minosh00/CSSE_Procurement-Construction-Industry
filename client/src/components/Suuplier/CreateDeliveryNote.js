import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import SideNavbar from '../Auth/SideNavbar';
import Swal from "sweetalert2";

const CreateDeliveryNote = () => {
    const [orderID, setorderID] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const changeOnClick = (f) => {
        const payment = {
            orderID,
            amount,
            paymentMethod,
            phoneNumber
        };

        try {
            axios.post("http://localhost:5000/payment/", payment);
            Swal.fire("Congrats", "Payment successfull", "success")
            navigate("/DisplayApprovedOrderAdmin");
        } catch (err) {
            Swal.fire("error", "Error", "error")
        }
    }

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    })

    return (
        <div class="container shadow my-5 py-5 mx-auto w-50">
            <h3 className=" fw-bolder"><center><b>Delivery Note</b></center></h3>
            <hr />
            <div className='row py-3'>
                <div class="col-md-4">
                    <label for="" class="form-label">Purchase ID</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3" />
                </div>
                <div class="col-md-4">
                    <label for="" class="form-label">Order ID</label>
                    <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />

                </div>
                <div class="col-md-4">
                    <label for="" class="form-label">Transport ID</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />
                </div>
            </div>
            <div className='row py-3'>
                <div class="col-md-6">
                    <label for="" class="form-label">Date</label>
                    <input type="text"
                        class="form-control"
                        id="exampleFormControlTextarea3" />
                </div>
                <div class="col-md-6">
                    <label for="" class="form-label">Total Amount</label>
                    <input type="email"
                        class="form-control"
                        id="exampleFormControlTextarea3"
                    />
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto"> <br />
                <button class="btn btn-danger" type="button">Submit Delivery Note</button>
            </div>
        </div>
    )
}

export default CreateDeliveryNote
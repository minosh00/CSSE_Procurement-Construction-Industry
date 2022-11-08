import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams ,useNavigate} from 'react-router-dom';
import SideNavbar from '../Auth/SideNavbar';
import Swal from "sweetalert2";


function UpdateOrder(props) {

    const navigate = useNavigate();

    const [order, setOrder] = useState({
        OrderID: "",
        DeliveryAddress: "",
        Material: "",
        Deadline: "",
        QTY: "",
        Price: "",
        Description: "",
        status: ""
    });

    const { id } = useParams("");

    function sendUpadateUser(e) {

        e.preventDefault();
        axios.patch(`http://localhost:5000/order/UpdateOrderById/${id}`, order)
            .then(res => {
                console.log(res.data)
                Swal.fire("success", "Order Updated Success   ", "success"); {
                    navigate("/AllOrdersAdmin");
                  }


            }).catch((err) => {
                alert(err)
                console.error(err)
            })
    }


    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/order/OrderByID/${id}`)
                setOrder(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getdata()
    }, []);

    return (
        <div>
            <div>
                <SideNavbar />
                <div class="container shadow my-5 mx-auto w-50"> <br />
                    <div className="fw-bolder mb-4">
                        <h3 className=" fw-bolder mb-4"><center>Update Order Details</center></h3>
                    </div>
                    <hr />
                    <form onSubmit={sendUpadateUser}>
                        <div className="row py-3">
                            <div className="col-md-4">
                                <label for="name">Order ID</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Order ID"
                                    value={order.OrderID}
                                    onChange={(e) => { setOrder({ OrderID: e.target.value }) }} readOnly></input>
                            </div>

                            <div className="col-md-4">
                                <label for="email">Material</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Material Name"
                                    value={order.Material}
                                    onChange={(e) => { setOrder({ Material: e.target.value }) }}></input>
                            </div>

                            <div className="col-md-4">
                                <label for="contact">Deadline</label>
                                <input type="text" className="form-control" id="contact" placeholder="Enter Deadline"
                                    value={order.Deadline}
                                    onChange={(e) => { setOrder({ Deadline: e.target.value }) }}></input>
                            </div>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-4">
                                <label for="contact">Quantity</label>
                                <input type="text" className="form-control" id="contact" placeholder="Enter Quantity"
                                    value={order.QTY}
                                    onChange={(e) => { setOrder({ QTY: e.target.value }) }}></input>
                            </div>

                            <div className="col-md-4">
                                <label for="contact">Price (LKR)</label>
                                <input type="text" className="form-control" id="contact" placeholder="Enter Price"
                                    value={order.Price}
                                    onChange={(e) => { setOrder({ Price: e.target.value }) }}></input>
                            </div>

                            <div className="col-md-4">
                                <label for="contact">Order Status</label>
                                <input type="text" className="form-control" id="contact" placeholder="Enter Order Status"
                                    value={order.status}
                                    onChange={(e) => { setOrder({ status: e.target.value }) }} readOnly></input>
                            </div>
                        </div>

                        <div className="row py-3">
                            <div className="col-md-6">
                                <label for="id">Delivery Address</label>
                                <textarea type="text" className="form-control" id="id" placeholder="Student Id"
                                    value={order.DeliveryAddress}
                                    onChange={(e) => { setOrder({ DeliveryAddress: e.target.value }) }}></textarea>
                            </div>

                            <div className="col-md-6">
                                <label for="contact">Description</label>
                                <textarea type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                    value={order.Description}
                                    onChange={(e) => { setOrder({ Description: e.target.value }) }}></textarea>
                            </div>
                        </div>
                        <div className='py-3'>
                            <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Update Order</button> <br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateOrder
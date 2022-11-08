import React, { useState, useEffect } from 'react'
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import AllOrdersPdf from '../Common/AllOrdersPdf';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import SideNavbar from '../Auth/SideNavbar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function AllOrdersAdmin() {
    const [orders, setOrders] = useState();
    const [serachItem, setSearchItem] = useState([]);

    //get all orders
    useEffect(async () => {
        try {
            const data = await (
                await axios.get("http://localhost:5000/order/GetAllOrders")).data;
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    //Delete order by ID
    const deleteOrders = id => {
        axios.delete(`http://localhost:5000/order/RemoveOrder/${id}`)
            .then(res => {
                Swal.fire('Congrats', 'Remove Order Details Successfully ', 'success')
            })
        setOrders(orders.filter(elem => elem._id !== id))
    }

    return (
        <div>
            <div>
                <SideNavbar />
                <div className="container shadow my-5 mx-auto"> <br />
                    <h3 className="fw-bolder mb-4">
                        <center>All Orders</center>
                    </h3>
                    <div className="row">
                        <div class="input-group">
                            <div className="col-md-6 mx-auto">
                                <input type="search" class="form-control rounded" placeholder="Search by Order ID" aria-label="Search" onChange={event => { setSearchItem(event.target.value) }}
                                    aria-describedby="search-addon" /> <br /> <br />
                            </div>
                        </div>
                        <div class="gap-2 py-3">
                            <button className='btn btn-danger' onClick={() => AllOrdersPdf(orders)}>
                                Generate Pdf
                            </button> &nbsp;
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="btn btn-danger"
                                table="FundsTrans"
                                filename="AllOrders"
                                sheet="tablexls"
                                buttonText="Export As Excel" />
                            <br /> <br />
                        </div>


                        <table className="table table-bordered mb-3" Id="FundsTrans">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Delivery Address</th>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>

                            <tbody id="table-group-divider">
                                {orders &&
                                    orders.filter((orders) => {
                                        if (serachItem == "") {
                                            return orders
                                        } else if (orders.OrderID.toLowerCase().includes(serachItem.toLowerCase())) {
                                            return orders
                                        }
                                    })
                                        .map((orders, id) => {
                                            return (
                                                <tr>
                                                    <td>{id + 1}</td>
                                                    <td>{orders.OrderID}</td>
                                                    <td>{orders.DeliveryAddress}</td>
                                                    <td>{new Date(orders.createdAt).toDateString()}</td>
                                                    <td>{orders.QTY}</td>
                                                    <td>LKR: {orders.Price}</td>
                                                    <td><Badge color="danger" style={{ fontSize: "15px" }} disabled> {orders.status} </Badge>  </td>
                                                    <td><Link to="">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success"
                                                            onClick={() => window.location.href = `/ViewOrderssById/${orders?._id}`}>
                                                            View Order
                                                        </button>
                                                    </Link></td>

                                                    <td>
                                                        <Link to={`/UpdateOrder/${orders?._id}`}>
                                                            <IconButton aria-label="update" size="large">
                                                                <EditIcon fontSize="inherit" />
                                                            </IconButton>
                                                        </Link>
                                                    </td>

                                                    <td>
                                                        <IconButton aria-label="delete" onClick={() => deleteOrders(orders._id)} size="large">
                                                            <DeleteIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AllOrdersAdmin
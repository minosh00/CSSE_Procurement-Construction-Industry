import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../procurementStaff/Loader";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import SideNavbar from "../Auth/SideNavbar";
import Swal from "sweetalert2";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from 'react-bootstrap'
import PendingPdf from "../Common/PendingPdf";

function DisplayPendingOrderAdmin() {
  const [users, setusers] = useState();
  const [serachItem, setserachItem] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/order/AllOrderStatus/")
      ).data;
      console.log("all data", data)
      var array = []
      data?.map((users) => {
        if (users?.status == "Pending") {
          array.push(users);
        }
      });
      setusers(array);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  const deletePendingOrder = id => {
    axios.delete(`http://localhost:5000/order/RemoveOrder/${id}`)
      .then(res => {
        Swal.fire('Congrats', 'Remove Pending Order Details Successfully ', 'success')
      })
    setusers(users.filter(elem => elem._id !== id))
  }

  return (
    <div> <br />
      <SideNavbar />
      <div className="container shadow py-5">
        <h3 className=" fw-bolder"><center><b>All Pending Orders</b></center></h3>
        <br />

        <div className="row">
          {loading && <Loader />}
          <div className="row">
            <div class="input-group">
              <div className="col-md-6 mx-auto">
                <input type="search" class="form-control rounded" placeholder="Search by Order ID" aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
                  aria-describedby="search-addon" /> <br /> <br />
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
              <Button className='btn btn-danger' onClick={() => PendingPdf(users)}>Generate Pdf</Button>
            </div>

            <table class="table" Id="FundsTrans">
              <thead className='table-dark'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Order ID </th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Material</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Check Order</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {users &&
                  users.filter((users) => {
                    if (serachItem == "") {
                      return users
                    } else if (users.OrderID.toLowerCase().includes(serachItem.toLowerCase())) {
                      return users
                    }
                  })
                    .map((topic, id) => {
                      return (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{topic.OrderID}</td>
                          <td>{topic.DeliveryAddress}</td>
                          <td>{topic.Deadline}</td>
                          <td>{topic.Material}</td>
                          <td>{topic.QTY}</td>
                          <td>LKR: {topic.Price} /=</td>
                          <td>  <Badge color="success" style={{ fontSize: "15px" }} disabled >{topic.status}</Badge>    </td>
                          <td>  <Link to={{ pathname: `/UpdateOrderById/${topic?._id}` }}>
                            <Badge color="primary" style={{ fontSize: "15px" }} disabled > Order Evaluate </Badge>
                          </Link>&nbsp;</td>
                          
                          <td>
                            <Link to={`/UpdateOrder/${users?._id}`}>
                              <IconButton aria-label="update" size="large">
                                <EditIcon fontSize="inherit" />
                              </IconButton>
                            </Link>
                          </td>
                          <td>
                            <IconButton aria-label="delete" onClick={() => deletePendingOrder(users._id)} size="large">
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
  );
}

export default DisplayPendingOrderAdmin;
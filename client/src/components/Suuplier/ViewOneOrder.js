import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderByID, ViewOrderssById } from "../../Services/SupplierServices";

const ViewOneOrder = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };

  const [OrderID, setOrderID] = useState("");
  const [DeliveryAddress, setDeliveryAddress] = useState("");
  const [QTY, setQTY] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setstatus] = useState("");
  const [note, setMessage] = useState("");
  const [Deadline, setDeadline] = useState("");
  const [Material, setMaterial] = useState("");

  const handleOrderid = (e) => {
    setOrderID(e.target.value);
  };

  const handleDeliveryAddress = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleQTY = (e) => {
    setQTY(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handlegruopleaderitnum = (e) => {
    setDescription(e.target.value);
  };
  const handlestatus = (e) => {
    setstatus(e.target.value);
  };

  const handlesetMessage = (e) => {
    setMessage(e.target.value);
  };

  const GetTopicData = async () => {
    let data = await OrderByID(id);
    console.log("Update topics", data);
    setOrderID(data?.data?.OrderID);
    setQTY(data?.data?.QTY);
    setPrice(data?.data?.Price);
    setDescription(data?.data?.Description);
    setstatus(data?.data?.status);
    setDeliveryAddress(data?.data?.DeliveryAddress);
    setMessage(data?.data?.note);
    setMaterial(data?.data?.Material);
    setDeadline(data?.data?.Deadline);
  };

  useEffect(() => {
    GetTopicData();
  }, []);

  const updateorderData = async (e) => {
    e.preventDefault();
    let newdata = {
      OrderID: OrderID,
      QTY: QTY,
      Price: Price,
      Description: Description,
      status: status,
      note: note,
      Deadline: Deadline,
      Material: Material,
      DeliveryAddress: DeliveryAddress,
    };

    let data = await ViewOrderssById(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.OrderID) {
      Swal.fire("error", " please  check again ", "error"); {
        navigate("");
      }
    } else {
      Swal.fire("success", "Successfully Evaluate  Topic", "success"); {
        navigate("");
      }
    }
  };

  return (
    <div>
      <div className="container shadow my-5 mx-auto w-50" id="cusdet">
        <div className="col p-3">
          <h3 className=" fw-bolder mb-4"><center>{OrderID} Order Details  </center></h3> <hr />
          <form>
            <div className='row py-3'>
              <div class="col-md-6">
                <label for="" class="form-label">Order ID</label>
                <input type="text"
                  class="form-control"
                  id="floatingInput"
                  readOnly={true}
                  value={OrderID}
                />
              </div>
              <div class="col-md-6">
                <label for="" class="form-label">Quantity</label>
                <input type="text"
                  class="form-control"
                  id="floatingPassword"
                  readOnly={true}
                  value={QTY}
                />
              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Total Price</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Price}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label">Description</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Description}
                  />
                </div>
              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Delivery Address</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={DeliveryAddress}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label">Order Status </label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={status}
                  />
                </div>

              </div>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Material</label>
                  <input type="textarea"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Material}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label"> Deadline </label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Deadline}
                  />
                </div>
              </div>
            </div>
            <Link to="/DisplayApprovedOrderList">
              <button
                type="submit"
                className="btn btn-success">
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewOneOrder;
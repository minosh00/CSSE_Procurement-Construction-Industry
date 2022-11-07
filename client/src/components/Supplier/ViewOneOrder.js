import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { OrderByID } from "../../Services/SupplierServices";

const ViewOneOrder = () => {

  const { id } = useParams();

  const [OrderID, setOrderID] = useState("");
  const [DeliveryAddress, setDeliveryAddress] = useState("");
  const [QTY, setQTY] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setstatus] = useState("");
  const [Deadline, setDeadline] = useState("");
  const [Material, setMaterial] = useState("");

  const GetTopicData = async () => {
    let data = await OrderByID(id);
    console.log("Update topics", data);
    setOrderID(data?.data?.OrderID);
    setQTY(data?.data?.QTY);
    setPrice(data?.data?.Price);
    setDescription(data?.data?.Description);
    setstatus(data?.data?.status);
    setDeliveryAddress(data?.data?.DeliveryAddress);
    setMaterial(data?.data?.Material);
    setDeadline(data?.data?.Deadline);
  };

  useEffect(() => {
    GetTopicData();
  }, []);

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
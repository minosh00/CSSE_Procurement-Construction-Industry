  

 
 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderByID, UpdateOrderById } from "../../Services/SupplierServices";


const EvaluateOrder = () => {

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
      note:note,
      DeliveryAddress: DeliveryAddress,

    };

    let data = await UpdateOrderById(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {
        Swal.fire("error", " please  check again ", "error");{

            navigate("");

        }
    
    } else {
        Swal.fire("success", " successfully  Evaluate  Topic", "success");{

            navigate("");

        }
    }
  };

  return (
    <div >
  







    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <center>
        <br />
        <form>
          
        <label for="floatingInput">   Order ID</label>
        <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput"  readOnly={true}  onChange={handleOrderid}    value={OrderID}   />
     
                </div>


                <label for="floatingInput">  status  </label>
             

                <select
            class="form-control"
            id="floatingInput"
            value={status}
            style={{ width: "200px" }}
            onChange={handlestatus}
          >
            <option value=""></option>
            <option value="OK">Approved</option>
            <option value="decline">Decline</option>

          </select>



            
                <label for="floatingInput">  Evaluate Message </label>
        <div class="form-floating mb-3">
                    <textarea  class="form-control" id="exampleFormControlTextarea3"  onChange={handlesetMessage}    value={note}  required  placeholder=" "  rows="6">
                    </textarea>

                </div>
          
         





          <button
            onClick={(e) => updateorderData(e)}
            className="btn btn-danger"
            type="submit"
          >
            Update Order Status 
          </button>
        </form>
      </center>
    </div>
    </div>
  );
};

export default EvaluateOrder;